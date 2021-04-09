import React from 'react';
import './App.css';
import Buttons from './Buttons';
import Humi from './Humi';
import Temp from './Temp';

function App() {

  return (
    <div className="app">
      <Humi />
      <Buttons />
      <Temp />
      

    </div>
    
  );
}

export default App;
