import './App.css';
import { useEffect, useState } from 'react';
import Gallery from './components/Gallery/Gallery';

function App() {
  // stores all our movie titles in state after initial fetch
  const [titles, setTitles] = useState([]);
  // const [selectedTitle, setSelectedTitle] = useState([]);

  const getTitles = () => {
    fetch('/titles.json')
      .then((response) => {
        // console.log('Response: ', response);
        return response.json();
      }).then((data) => {
        console.log('Titles: ', data);
        setTitles(data);
      }).catch(err => {
        console.log('Error reading data: ', err);
      });
  }

  // triggers initial fetch request to get titles from our titles.json file, runs once
  useEffect(() => getTitles(), []);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <Gallery titles={titles} />
        </div>
      </div>
    </div>
  );
}

export default App;
