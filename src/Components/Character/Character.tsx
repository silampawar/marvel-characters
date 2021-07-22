import React,{FC} from 'react';
import styles from "./Character.module.scss";
import {ICharacterInput} from "./Character.d"
const Character:FC<ICharacterInput> = ({data}:ICharacterInput):JSX.Element =>{

    const detailUrl = data && data.urls && data.urls.find((x: { type: string; }) => x.type === "detail");
    return <>
   <div className={styles.container}>
      <div className={styles.cover}>
        <ul className={styles.summary}>
          <li>
            <b>{data.comics.available}</b> comics
          </li>
          <li>
            <b>{data.events.available}</b> events
          </li>
          <li>
            <b>{data.series.available}</b> series
          </li>
          <li>
            <b>{data.stories.available}</b> stories
          </li>
        </ul>
      </div>
      <a href={detailUrl?.url} target="_blank" rel="noopener noreferrer">
        <img
          alt="thumb"
          className={styles.thumb}
          src={
            data.thumbnail?.path + "." + data.thumbnail?.extension
          }
        />
      </a>
      <div className={styles.details}>
        <div className={styles.detailsText}>
          <div className={styles.title}>{data.name}</div>
        </div>
      </div>
    </div>
    </>

}

export default Character;