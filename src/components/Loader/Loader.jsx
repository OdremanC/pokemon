import React from 'react';
import './styles.scss'
import loader from "../../assets/images/loading.gif"

function Loader ({t = ()=>{} }) {
  return(
    <div className='loader'>
        <img src={loader} alt="Loader"/>
        <h4>{t('Cargando...')}</h4>
    </div>
  )
}
export default Loader;