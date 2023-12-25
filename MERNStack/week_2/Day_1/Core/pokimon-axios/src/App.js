import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const read = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  };
  console.log(data);

  return (
    <div className="App">
      <button type="button" className="btn btn-info" onClick={read}>
        Show data
      </button>
      <ul>
        {data.map((e, index) => {
          return (
            <li key={index}>
              {e.name}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
