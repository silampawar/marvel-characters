import React, { FC } from 'react';
import Character from './../Character'
import styles from "./CharacterList.module.scss";
import { ICharacterListInput } from "./CharacterList.d"
import { ICharacter } from '../Character/Character.d';
const CharacterList: FC<ICharacterListInput> = ({ dataList }: ICharacterListInput): JSX.Element => {
    return <>
        <div className={styles.container} data-testid="character-list">
            {dataList && dataList.map((item: ICharacter,i:number) => { return <Character data={item} key={i} /> })}
        </div>
    </>

}

export default CharacterList;