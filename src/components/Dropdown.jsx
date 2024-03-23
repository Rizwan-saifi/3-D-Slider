/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Dropdown.css"
const Dropdown = ({items,screenSize}) => {
    const [isActive,setActive] = useState(false);
    const handleMoreClick = () =>{
        setActive(!isActive);

    }
    // eslint-disable-next-line no-unused-vars
    let [visibleLength,setVisibleLength] = useState(5);
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
  return (
    <div className="dropdown-container">
        <a className={`more ${isActive? 'button-clicked' : ''}`} onClick={handleMoreClick}>More</a>
        {items.length > visibleLength && (
            <div className="dropdown-item">
                {isActive && (
                    <ul>
                    {items.slice(visibleLength).map((item)=>(
                        <li className = "more-item" key={item.label}>
                            <a>{item.label}</a>
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        )}
    </div>
  )
}

export default Dropdown