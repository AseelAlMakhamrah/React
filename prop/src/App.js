import './App.css';
import Props from './components/Props';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Props firstName="Samer" lastName="Imrash" age="53" hairColor="Black"/>
      <Props firstName="Aseel" lastName="Makhamrah" age="22" hairColor="Black"/>
      <Props firstName="Jehad" lastName="Jaber" age="20" hairColor="Black"/>
      {/* <Props firstName= "Fillmore" lastName="Millard" age="50" hairColor="Brown"/>
      <Props firstName="Smith" lastName="Maria" age="62" hairColor="Brown"/> */}
    </div>
  );
}

export default App;
