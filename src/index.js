import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// import createStore and combine reducers from redux
import { createStore, combineReducers } from 'redux'

// import react-redux Provider
import { Provider } from 'react-redux'

// import reducer
import ducks from './reducers/ducks'

// combine reducers
const reducers = combineReducers({
  ducks,
});

// create store from reducers and add redux dev tools
let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // wrap app in Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
