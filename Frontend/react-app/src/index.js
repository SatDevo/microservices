import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './redux/routers/AppRouter';


import './assets/app.css';

import {store} from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
  
  document.getElementById('root'));

