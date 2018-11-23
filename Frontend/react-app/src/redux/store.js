import {applyMiddleware, createStore, compose} from "redux";
import {reducers} from "./reducers";
import {api} from "./middleware/api";
import root from '../redux/sagas';

import createSagaMiddleware from 'redux-saga';

// dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let  sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
    //applyMiddleware(api, sagaMiddleware),
  )
);

sagaMiddleware.run(root);
