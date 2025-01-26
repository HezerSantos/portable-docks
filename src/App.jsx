import { useState, useEffect } from 'react'
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import '../src/assets/styles/App.css'
import dock from './assets/images/dock.jpg'

const ResponsiveIcon = () => {
    const [iconSize, setIconSize] = useState(24); // Set initial size (in px)
  
    useEffect(() => {
      // Function to handle window resize
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setIconSize(.2);  // Small size for mobile
        } else if (window.innerWidth < 1024) {
          setIconSize(.5);  // Medium size for tablets
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
          <Icon path={mdiCartOutline} size={iconSize} />
        </li>
      );
}

function App() {
    return (
        <>
            <nav className='main-navigation'>
                <h1>Portable Docks</h1>
                <ul>
                    <li>Electronics</li>
                    <li>Jewelry</li>
                    <li>Men's Clothing</li>
                    <li>Women's Clothing</li>
                    <ResponsiveIcon />
                </ul>
            </nav>

            <section className='main-hero'> 
                <div className='main-hero-image'>
                    <h1>Shop Portably and Comfortably</h1>
                    <p>
                        Experience the convenience of shopping on-the-go with ease and comfort. 
                        Whether you're browsing for your favorite products or discovering new items, our platform lets you shop anytime and anywhere. 
                        Enjoy a seamless, portable shopping experience that fits into your busy lifestyle. From smooth navigation to user-friendly 
                        features, we ensure that your shopping journey is as comfortable as it is enjoyable. Say goodbye to long lines and crowded malls—shop from the comfort 
                        of your home, your office, or wherever you are!
                    </p>
                </div>
            </section>
        </>

    )
}

export default App
