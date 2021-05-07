import './Gallery.css';

function Gallery({ titles }) {

  const titleItems = titles.map(title => 
    <li key={title.id}>
      <img
        className="gallery-item"
        src={title.images[0].url}
        alt={title.name}>
      </img>
      <h2 className="thumb-title">{title.name}</h2>
    </li>
    )

  return (
      <ul className="title-gallery">
        {titleItems}
      </ul>
  )
}

export default Gallery;