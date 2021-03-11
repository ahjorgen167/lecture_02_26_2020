import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App.js';
import './index.css';

import Reducers from './Reducers';

const store = createStore(Reducers);

console.log("store");
console.log(store)

//PROVIDER
// -> state
// -> dispatch function

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));