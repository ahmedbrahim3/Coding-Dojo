import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import Show from './components/Show';
import Update from './components/Update';
function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/' element={< Home/>}  />
     <Route path='/one/:id' element={< Show/>}  />
     <Route path='/update/:id' element={< Update/>}  />
     
     
     </Routes>
    </div>
  );
}

export default App;
