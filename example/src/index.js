import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReduxGhost, { reducer as ghostReducer } from 'redux-ghost';

import App from './app';
import './index.css';

ReduxGhost.setConfig({
  host: 'http://localhost:2368',
  clientId: 'ghost-frontend',
  clientSecret: '4837a41df11b',
});

const rootReducer = combineReducers({
  blog: ghostReducer,
});

const showDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  showDevTools,
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
