import './Gallery.css';
import { useState } from 'react';
import SidebarContainer from '../SidebarContainer/SidebarContainer';

function Gallery({ titles }) {
  // state hook for when user selects a title 
  const [id, setId] = useState(0);
  const [titleName, setTitleName] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [selected, setSelected] = useState(false);
  
  const titleItems = titles.map(title => 
    <li
      key={title.id}
      onClick={() => {
        setId(title.id);
        setTitleName(title.name);
        setRating(title.titleRatingDisplayName);
        setDescription(title.description.medium);
        setSelected(true);
        console.log(`You clicked ${JSON.stringify(title.name)}, id: ${JSON.stringify(title.id)}`);
        }}
        >
      <img
        className="gallery-item"
        src={title.images[0].url}
        alt={title.name}>
      </img>
      <h2 className="thumb-title">{title.name}</h2>
    </li>
  )

  return (
    <>
      <ul className="title-gallery">
        {titleItems}
      </ul>
      <SidebarContainer
        id={id}
        titleName={titleName}
        rating={rating}
        description={description}
        selected={selected}
      />
    </>  
  )
}

export default Gallery;