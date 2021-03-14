import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router'
import configureStore, {history} from './store';

const store=configureStore()
ReactDOM.render(
  <Provider store = {store}>
    
    <App history={history}/>
    
  </Provider>,
  document.getElementById('root')
);


