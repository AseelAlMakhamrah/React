
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Samer" lastName="Imrash" age="53" hairColor="Black"/>
      <PersonCard firstName="Aseel" lastName="Makhamrah" age="22" hairColor="Black"/>
      <PersonCard firstName="Jehad" lastName="Jaber" age="20" hairColor="Black"/>
    </div>
  );
}

export default App;
