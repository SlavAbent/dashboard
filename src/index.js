import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss'
import 'normalize.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux/reducers/index'
import App from './App';

import 'normalize.css';

const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <App />
    </Provider>
    
);

