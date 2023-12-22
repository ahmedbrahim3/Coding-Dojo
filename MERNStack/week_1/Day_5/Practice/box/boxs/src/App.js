import Display from './components/display';
import Form from './components/form';
import './App.css';
import { useState } from 'react';

function App() {
  const colors=["black","red","blue"]
  const [color,setColor]=useState(colors)
  console.log(color);

  
  return (
    <div className="App">
    
    <Form  color={color} set={setColor}/>
      <Display colors={color}/>
    </div>
  );
}

export default App;
