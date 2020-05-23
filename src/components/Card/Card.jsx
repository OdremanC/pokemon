import React from 'react';
import styles from './Card.module.scss';
import notAvailableImage from '../../assets/images/imageNotAvailable.jpg'

const Card = ({name, id, onSelect, selectedClass}) => (
  <article className={`${styles.card}`}
    onClick={()=>{ !selectedClass && onSelect()}} >
      <div className={styles.description}>
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={name} 
            onError={(e)=>{e.target.onerror = null; e.target.src=notAvailableImage}} />
          <h2>{name}</h2>
      </div>
  </article>
)
export default Card