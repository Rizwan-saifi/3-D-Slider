/* eslint-disable react/prop-types */

import "./NavElements.css"
const NavElements = ({items,screenSize}) => {
    // eslint-disable-next-line no-unused-vars
    let visibleLength;
    if (screenSize < 576) { // Small screen (e.g., mobile phones)
      visibleLength = 1;
    } else if (screenSize >= 576 && screenSize < 768) { // Medium screen (e.g., tablets)
      visibleLength = 2;
    } else if(screenSize>=768 && screenSize<992){ // Large screen (e.g., desktops)
      visibleLength = 2;
    }
    else if(screenSize>=992 && screenSize<1200){
      visibleLength=4;
    }
    else{
      visibleLength=5;
    }
    // eslint-disable-next-line no-unused-vars
    const visibleItems = items.slice(0, visibleLength);
  return (
    <div className="nav-elements">
        <div className="elements">
            {visibleLength &&visibleItems.map((item)=>(
                <li className ="element-item" key = {item}>
                        <a>{item.label}</a>     
                </li>
            ))}      
        </div>
    </div>
  )
}

export default NavElements