import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { App } from './components/app';

render(
  <App />,
  document.getElementById('wrapper')
);


