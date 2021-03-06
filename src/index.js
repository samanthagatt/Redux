import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import { rootReducer } from "./reducers";

import App from "./App";

const store = createStore(rootReducer, applyMiddleware(logger));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
rootElement);
