import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import App from './App';
import { createRoot } from 'react-dom/client';
import reducers from './reducers';
import { thunk } from 'redux-thunk';

const store = createStore(reducers, compose(applyMiddleware(thunk)))
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>


    <App />
  </Provider>


)