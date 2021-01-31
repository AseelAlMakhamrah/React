import { useState } from 'react';
import './App.css';
import Result from './components/Result';
import UserForm from './components/UserForm';

function App() {
  const [state,setState]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmpassword:"",
  })
  return (
    <div className="App">
      <UserForm input ={state} setInput={setState}/>
      <Result data={state}/>
    </div>
  );
}

export default App; 
