import React from "react";
import "./styles.scss";

function Footer ({t = ()=>{}}) {
  return (
    <section className='footer'>
      <h3>{t('Desarrollado por')} Christian Odreman</h3>
    </section>
  );
}

export default Footer;
