import './App.css';
import Putting from './components/Putting';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Putting firstName="Samer" lastName="Imrash" age={53} hairColor="Black"/>
      <Putting firstName="Aseel" lastName="Makhamrah" age={22} hairColor="Black"/>
      <Putting firstName="Jehad" lastName="Jaber" age={20} hairColor="Black"/>
      {/* <Putting firstName= "Fillmore" lastName="Millard" age="50" hairColor="Brown"/>
      <Putting firstName="Smith" lastName="Maria" age="62" hairColor="Brown"/> */}
    </div>
  );
}

export default App;