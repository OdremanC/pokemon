import React from 'react';
import style from './Loader.module.css'
import loader from "../../assets/images/loading.gif"

function Loader ({t = ()=>{} }) {
  return(
    <div className={style.loader}>
        <img src={loader} alt="Loader"/>
        <h4>{t('Cargando...')}</h4>
    </div>
  )
}
export default Loader;