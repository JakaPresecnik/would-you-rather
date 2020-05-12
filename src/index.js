import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
import reducer from './reducers'
import middleware from './middleware'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const persistConfig = {
  key: 'root',
  storage,
}

//redux-persist added in order to prevent browser reloading the page when entering in the search bar
const persistedReducer = persistReducer(persistConfig, reducer)

let store = createStore(persistedReducer, middleware)
let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
