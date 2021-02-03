import React from 'react';
import {Router}  from '@reach/router';
import People from './components/People';
import Planet from './components/Planet';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <People path ="/people/:id/"/>
        <Planet path ="/planets/:id/"/>
      </Router>
    </div>
  );
}

export default App;
