import './SidebarItem.css';

function SidebarItem({ titleName, rating, description }) {

  return (
    <div className="title-metadata">
      {/* add conditional stmt so RATING doesn't always show */}
      <h2>{titleName}</h2>
      <h3>{rating}</h3>
      <p>{description}</p>
    </div>
  )
}

export default SidebarItem;