import React from 'react';
import { Sidebar } from './sidebar';
import { Splitter } from './splitter';
import { Content } from './content';

export function App(props) {
  return (
    <div id="app">
      <Sidebar />
      <Splitter />
      <Content />
    </div>
  );
}
