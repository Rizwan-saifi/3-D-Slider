


import Carasoul from "./components/Carasoul";
import Header from "./components/Header";
import "./App.css"
import { useEffect,useState } from "react";



function App() {
  const menuItems = [
    { label: 'Home' },
    { label: 'About Us' },
    { label: 'Services' },
    { label: 'Contact' },
    { label: 'Blog' },
    { label: 'Careers' },
    {label: 'Furniture'},
    {label: 'Electronics'},

  ];
  // eslint-disable-next-line no-unused-vars
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">
      <Header items={menuItems} screenSize={screenSize} />
      
      <h1 className="heading">Featured Products</h1>
      <p className='para'>Explore and discover a variety of products</p>
      <Carasoul />
      
    </div>
  )
}

export default App
