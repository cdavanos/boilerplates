import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

const App = () => {};

const wrapper = document.getElementById('app');
if (wrapper) {
  ReactDOM.render(<App />, wrapper);
}

export default App;
