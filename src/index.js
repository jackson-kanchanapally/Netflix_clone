import React from 'react';
import ReactDOM from 'react-dom/client';
import {render} from 'react-dom'
import 'normalize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from './global-styles';
import {Firebase} from './lib/firebase.prod'
import {FirebaseContext} from './context/firebase'
render(
  <>
  <FirebaseContext.Provider value={{Firebase}}>
  <GlobalStyles/>
    <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);

