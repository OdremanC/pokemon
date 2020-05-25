import React, { Suspense  } from 'react';
import Widgets from './Widgets';
import './App.scss';


const App = ({children}) => {
  return (
    <Suspense>
      <div className="App">
        <Widgets />
      </div>      
    </Suspense>
  );
}
export default App;