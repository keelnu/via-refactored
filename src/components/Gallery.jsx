import { useEffect, useState } from 'react';

function Gallery() {
  const [data, setData] = useState([]);

  const getTitles = () => {
    fetch('/titles.json')
      .then((response) => {
        // console.log('Response: ', response);
        return response.json();
      }).then((data) => {
        console.log('Titles: ', data);
        setData(data);
      }).catch(err => {
        console.log('Error reading data: ', err);
      });
  }

  useEffect(() => {
    getTitles()
  }, []);

  const titleItems = data.map(title => 
    <li key={title.id}>
      <img
        src={title.images[0].url}
        alt={title.name}>
      </img>
      <h2>{title.name}</h2>
    </li>
    )

  return (
    <>
      {/* {
        data && data.length && data.map(title => 
          <li key={title.id}>
            <img
              src={title.images[0].url}
              alt={title.name}>
            </img>
            <h2>{title.name}</h2>
          </li>
        )
      } */}
      <ul>{titleItems}</ul>
    </>
  )
}

export default Gallery;