import React from 'react';
import Typing from './Typing';
import './App.css';

function App() {
  return (
    <div>
      <h1> {Typing('Hello World', 75)} </h1>
    </div>
  );
}
export default App;
