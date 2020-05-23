import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import Home from './containers/Home/Home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Home />                
    </App>
  </React.StrictMode>, document.getElementById('root')
);

serviceWorker.unregister();
