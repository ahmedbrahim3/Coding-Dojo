import { useState } from 'react'
import {Routes,Route,Navigate} from "react-router-dom";
import './App.css'
import Home from './components/home';
import Number from './components/number';
import Colors from './components/colors';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Navigate to={'/home'}/>}/>
          <Route path='/home' element={ <Home/>}/>
          <Route path="/:num" element={<Number/>} />
          <Route path="/:word/:col1/:col2" element={<Colors/>} />
        </Routes>
      </div>
    </>
    )
    
}

export default App
