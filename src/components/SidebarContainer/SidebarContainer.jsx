import './SidebarContainer.css';
import SidebarItem from '../SidebarItem/SidebarItem';

function SidebarContainer({ id, titleName, rating, description }) {

  return (
      <SidebarItem
        id={id}
        titleName={titleName}
        rating={rating}
        description={description} 
      />
  )
}

export default SidebarContainer;