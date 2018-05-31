import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let initialStore = store();
ReactDOM.render(
  <Provider store={initialStore } > 
    <App />
  </Provider >, 
  document.getElementById('root')
);

registerServiceWorker();
