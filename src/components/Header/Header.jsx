import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png"
import esflag from "../../assets/images/esflag.jpg"
import enflag from "../../assets/images/enflag.jpg"
import i18n from '../../utils/i18n'

const Header = () =>{

  const changeLanguage = (e)=>{
    e.preventDefault();
    if(i18n.language === 'en')
      i18n.changeLanguage('es');
    else
      i18n.changeLanguage('en');
  }

  return (
    <section className={styles.header}>
      <img src={logo} alt="Logo" />
      <button className={styles.btnLang} onClick={(e)=>{changeLanguage(e)}}>
        <img  src={i18n.language === 'en' ? esflag :enflag} alt="language"/>
      </button>
    </section>
  );
}

export default Header;