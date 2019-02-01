import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './components/App';
import reducers from './reducers';    // <= combined reducers, like having a rootReducer and all other reducers in one file

ReactDOM.render(                                //Debugger Tool initialization
  <Provider store={createStore(reducers, compose(window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()))}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
