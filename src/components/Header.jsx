/* eslint-disable react/prop-types */
import "./Header.css"
import Dropdown from './Dropdown'
import Logo from './Logo'
import NavElements from './NavElements'
import Search from "./Search"
const Header = ({items, screenSize}) => {
  return (
    <div className="header">
        <Logo />
        <NavElements  items = {items} screenSize={screenSize}/>
        <Dropdown items = {items} screenSize={screenSize}/>
        <Search classname = "search-bar" />
    </div>
  )
}

export default Header