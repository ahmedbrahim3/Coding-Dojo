import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import {Route,Routes} from "react-router-dom"

function App() {
  
  return (
    <div className="App">
    <h1>Favorites Authors</h1>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/create' element={<Create/>} />
    <Route path='/update/:id' element={<Update/>} />
    
    </Routes>
      
    </div>
  );
}

export default App;
