import { useState, useEffect } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';
import { mdiCartOutline } from '@mdi/js';

import '../src/assets/styles/App.css'

import Icon from '@mdi/react';

import DefaultShop from './DefaultShop';
import Electronics from './Electronics';

const ResponsiveIcon = () => {
    const [iconSize, setIconSize] = useState(24); // Set initial size (in px)
  
    useEffect(() => {
      // Function to handle window resize
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setIconSize(.3);  // Small size for mobile
        } else if (window.innerWidth < 1024) {
          setIconSize(.8);  // Medium size for tablets
        } else {
          setIconSize(1);  // Larger size for desktop
        }
      };
  
      // Add event listener on mount
      window.addEventListener('resize', handleResize);
  
      // Run on initial render
      handleResize();
  
      // Clean up event listener on unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <li>
          <Link to={"shoppingcart"}><Icon path={mdiCartOutline} size={iconSize} /></Link>
        </li>
      );
}

function App() {
    const {name} = useParams();
    return (
        <>
            <nav className='main-navigation'>
                <h1><Link to="/">Portable Docks</Link></h1>
                <ul>
                    <li> <Link to ="electronics">Electronics</Link> </li>
                    <li><Link to='jewelry'>Jewelry</Link></li>
                    <li><Link to='mensclothing'>Men's Clothing</Link></li>
                    <li><Link to='womensclothing'>Women's Clothing</Link></li>
                    <ResponsiveIcon />
                </ul>
            </nav>
            <main>
              <Outlet/>
            </main>
        </>

    )
}

export default App
