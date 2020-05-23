import React from 'react';
import style from './Loader.module.css'
import loader from "../../assets/images/loading.gif"

const Loader = ({loading = false, t = ()=>{} }) => {
  return(
    loading &&
    <div className={style.loader}>
        <img src={loader} alt="Loader"/>
        <h4>{t('Cargando...')}</h4>
    </div>
  )
}
export default Loader;