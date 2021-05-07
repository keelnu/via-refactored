import './SidebarContainer.css';
import SidebarItem from '../SidebarItem/SidebarItem';

function SidebarContainer({ selectedTitle }) {
  return (
    <>
      <div>
        <h2>Movie Title</h2>
        <p>Rating: TV-PG</p>
        <p>Synopsis: Description goes here.</p>
      </div>
      <SidebarItem />
    </>
  )
}

export default SidebarContainer;