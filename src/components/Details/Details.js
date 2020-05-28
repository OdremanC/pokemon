import React from 'react';
import './styles.scss';
import notAvailableImage from '../../assets/images/imageNotAvailable.jpg';

function Details({ t=()=>{}, selected={}, detail={}}) {
  return (
    <div className='pokemon-detail-container'>
      <div className={'pokemon-detail cardSelected'}>
        <div className='image'>
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${selected.id}.png`} alt={selected.name} 
            onError={(e)=>{e.target.onerror = null; e.target.src=notAvailableImage}} 
          />
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
        </div>
      </div>
    </div>
  )
}
export default Details;