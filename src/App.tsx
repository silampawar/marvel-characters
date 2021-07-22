import React, { useEffect } from 'react';
import logo from './logo.svg';
import CharacterList from './Components/CharacterList'
import useAxios from './Hooks/useAxiosHook';
import { generateHash } from './Utils/util'
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./App.module.scss";
import { useState } from 'react';
import { ICharacter } from './Components/Character/Character.d';
import { IResponse } from "./App.d"
  ;
function App(): JSX.Element {
  const LIMIT = 40;
  const API_URL = 'https://gateway.marvel.com:443/v1/public/characters';

  const { ts, publicKey, hash } = generateHash;
  const [characterList, setCharacterList] = useState<Array<ICharacter>>([]);
  /*Current offset defaulted to 0*/
  const [currentOffset, setCurrentOffset] = useState<number>(0);

  const [filter,setFilter] = useState<string|null>("");

  const [isLoadMoreClicked,setIsLoadMoreClicked]=useState<boolean>(false);
  const [isFilterChange,setIsFilterChange]=useState<boolean>(false);

  /*Fetch data from /characters API*/
  const { response, isLoading, error }: IResponse = useAxios({ 
    apiUrl: API_URL, 
    apiParams: { 
      ts, apikey:publicKey, 
      hash, offset: currentOffset, 
      limit: LIMIT,
      ...(filter!=="" && {nameStartsWith:filter})
    } });

    /*if offset+limit value in api is more than total count then do not display the load more button*/
    const isLoadMoreAv = response?((response.offset+response.limit)>response.total)?false:true:true;

  const loadMore = () => {
    /*in case of load more, current offset is updated to the limit*/
    setCurrentOffset(currentOffset + LIMIT)
    setIsLoadMoreClicked(true)
    setIsFilterChange(false);
  }
  /*Append characters list when more data is fetched*/
  useEffect(() => {
    response && isLoadMoreClicked && setCharacterList([...characterList,...response.results] as any) && setIsLoadMoreClicked(false);
    response && isFilterChange && setCharacterList([...response.results] as any) && setIsFilterChange(false);
    response && (!isFilterChange && !isLoadMoreClicked) && setCharacterList([...response.results] as any);

  }, [response,isLoadMoreClicked,isFilterChange])
  console.log("🚀 ~ file: App.tsx ~ line 49 ~ App ~ isLoadMoreClicked", isLoadMoreClicked)

  useEffect(() => {
    response && setCharacterList([...response.results] as any);

  }, [filter])
  console.log("🚀 ~ file: App.tsx ~ line 55 ~ App ~ isFilterChange", isFilterChange)


  return (

    <>
      <div className="app">
        <div className={styles.main}>
          <div>
            <header className={styles.header}>
              <img src={logo} className={styles.logo} alt="logo" />
            </header>
          </div>
          <div className={styles.body}>
            {error && <div className={`${styles.infoBar} ${styles.error}`}>Something went wrong, please try again!</div>}
            <div className={styles.search}>
              <input type="text" className={styles.searchTerm} placeholder="Enter character name to filter" onBlur={(e)=>{setFilter(e.target.value); setCurrentOffset(0);setIsFilterChange(true);setIsLoadMoreClicked(false)}}/>
            </div>
            {isLoading && <div className={styles.spinner}><ClipLoader color="black" loading={isLoading} size={51} /></div>}
            {characterList.length && <CharacterList dataList={characterList}></CharacterList>}
            {!isLoading && isLoadMoreAv && <div className={styles.button_cont}><button className={styles.load} onClick={loadMore}>Load more</button></div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
