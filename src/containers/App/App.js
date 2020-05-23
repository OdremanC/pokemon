import React, { Suspense  } from 'react';
import '../../assets/styles/main.css'
import Home from '../Home/Home';

const App = () => {
  return (
    <Suspense>
      <Home/>
    </Suspense>
  );
}
export default App;