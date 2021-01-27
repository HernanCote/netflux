import React from 'react';
import { render } from 'react-dom';

import GlobalStyles from './global-styles';
import 'normalize.css';

import App from './app';

import { firebase } from './lib/firebase.prod';

import reportWebVitals from './reportWebVitals';

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root'),
);

reportWebVitals();
