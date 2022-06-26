import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from './global-styles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <GlobalStyles/>
    <App />
  </>
);

reportWebVitals();
