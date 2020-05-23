import React, { useState } from 'react';
import './styles.css';
import notAvailableImage from '../../assets/images/imageNotAvailable.jpg'

function Details({getSelectedPokemon = ()=>{},t=()=>{}, selected={}, detail={}}) {
  const [selectedCard, setSelected] = useState(true);
  const handleSelected = () => {
    getSelectedPokemon();
    setSelected(!selectedCard);
  }

  return (
    <div onClick={(e) => getSelectedPokemon(e)} className={selectedCard ? 'cardSelected' : 'cardNotSelected'}>
      <div className='container'>
        <div className='image'>
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${selected.id}.png`} alt={selected.name} 
            onError={(e)=>{e.target.onerror = null; e.target.src=notAvailableImage}} 
          />
          <h2>{selected.name}</h2>
        </div>
        <div className='detail'>
          <h3>{`${t('Altura')}:`} <span>{`${detail.height / 10}m`}</span></h3>
          <h3>{`${t('Peso')}:`} <span>{`${detail.weight / 10}kg`}</span></h3>
          { 
            detail.abilities && detail.abilities.map(({ability, is_hidden}, key)=> 
            is_hidden ? 
              <h3 key={key}>{`${t('Habilidad normal')}:`} <span>{ability.name}</span></h3> 
              :
              <h3 key={key}>{`${t('Habilidad oculta')}:`} <span>{ability.name}</span></h3>
            )
          }
          <h4 onClick={()=>{ handleSelected() }}>{t('Cerrar')}</h4>
        </div>
      </div>
    </div>
  )
}
export default Details;