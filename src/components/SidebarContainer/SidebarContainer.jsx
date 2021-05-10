import './SidebarContainer.css';
import SidebarItem from '../SidebarItem/SidebarItem';

function SidebarContainer({ id, titleName, rating, description, selected }) {

  return (
      <SidebarItem
        id={id}
        titleName={titleName}
        rating={rating}
        description={description}
        selected={selected} 
      />
  )
}

export default SidebarContainer;