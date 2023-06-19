import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './shared/styles/index.scss'
import 'normalize.css'

const documentElement  = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(documentElement);

root.render( <App /> );

