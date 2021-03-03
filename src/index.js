import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux'
import appStore from './store/storeIndex';

ReactDOM.render(
    <Provider store={appStore()}>
      <Routes />
    </Provider>  
  ,document.getElementById('root')
);
