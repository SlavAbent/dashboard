import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss'
import 'normalize.css'
import TodoProvider from './redux/context/todoProvider'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>

);

