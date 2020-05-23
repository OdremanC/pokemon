import React from "react";
import style from "./Footer.module.scss";

const Footer = ({t = ()=>{}}) => {
  return (
    <section className={style.footer}>
      <h3>{t('Desarrollado por')} Christian Odreman</h3>
    </section>
  );
}

export default Footer;
