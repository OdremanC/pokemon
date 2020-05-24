import React, { Suspense, useState  } from 'react';
import { useTranslation } from "react-i18next";
import Loader from '../../components/Loader/Loader';

import Widgets from './Widgets';

import './App.scss';


const App = ({children}) => {
  const [loading, setLoading] = useState(true);
  const {t}= useTranslation();
  
  return (
    <Suspense>
      <div className="App">
        <Loader loading={loading} t={t}/>
        <Widgets setLoading={setLoading}/>
      </div>      
    </Suspense>
  );
}
export default App;