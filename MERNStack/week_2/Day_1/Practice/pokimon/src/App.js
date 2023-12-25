import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const read = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        return res.json();
      })
      .then((res) => setData(res.results))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <button type="button" class="btn btn-info" onClick={read}>
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
