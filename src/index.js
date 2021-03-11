import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import { NameContextComponent } from './NameContext.js';


//PROVIDER
// -> state
// -> dispatch function

ReactDOM.render(
        
        <NameContextComponent>
            <App />
        </NameContextComponent>
        
        , document.getElementById('root'));