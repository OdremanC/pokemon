import React, { Suspense  } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useTranslation } from "react-i18next";
import '../../assets/styles/main.css'

const App = (props) => {
  const {t}= useTranslation();  
  return (
    <Suspense>
      <Header />
      <div>
        { props.children }
      </div>
      <Footer t={t}/> 
    </Suspense>
  );
}
export default App;