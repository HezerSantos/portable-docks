import { useState, useEffect } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';
import { mdiCartOutline, mdiTranslate } from '@mdi/js';

import '../src/assets/styles/App.css'

import Icon from '@mdi/react';

import DefaultShop from './DefaultShop';
import Electronics from './Electronics';

const ResponsiveIcon = ({shoppingCart, setTotalQuantity, totalQuantity}) => {
    const [iconSize, setIconSize] = useState(1);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setIconSize(1); 
        } else if (window.innerWidth < 1024) {
          setIconSize(.8); 
        } else {
          setIconSize(1); 
        }
      };

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      let totalHelperQuantity = 0
      shoppingCart.forEach((value) => {
        totalHelperQuantity += value.quantity
        totalHelperQuantity = totalHelperQuantity > 100 ? '100+' : totalHelperQuantity
      })
      setTotalQuantity(totalHelperQuantity)
    }, [shoppingCart]);

    return (
        <li className='shopping-cart-icon'>
          <Link to={"shoppingcart"}><Icon path={mdiCartOutline} size={iconSize} /></Link>
          <p className='total-quantity'>{totalQuantity}</p>
        </li>
      );
}

const handleNavSlider = (setIsActive) => {
  setIsActive(prev => !prev)
}

function App() {
    const {name} = useParams();
    const [shoppingCart, setShoppingCart] = useState(new Map())
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const sideNavStyle = {
      transform: isActive ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 1s ease-in-out'
    };
    // useEffect(() => {
    //   console.log(shoppingCart)
    // }, [shoppingCart])
    return (
        <>
              <nav className='side-nav' style={sideNavStyle}>
                    <ul>
                      <li>
                        <button onClick={() => handleNavSlider(setIsActive)}>
                          Close
                        </button>
                      </li>
                      <li> <Link to ="electronics">Electronics</Link> </li>
                      <li><Link to='jewelery'>Jewelery</Link></li>
                      <li><Link to='mensclothing'>Men's Clothing</Link></li>
                      <li><Link to='womensclothing'>Women's Clothing</Link></li>
                      <ResponsiveIcon 
                        shoppingCart={shoppingCart} 
                        setTotalQuantity={setTotalQuantity}
                        totalQuantity={totalQuantity}
                      />
                  </ul>
              </nav>
            <nav className='main-navigation'>
                <h1><Link to="/">Portable Docks</Link></h1>
                <ul>
                    <li> <Link to ="electronics">Electronics</Link> </li>
                    <li><Link to='jewelery'>Jewelery</Link></li>
                    <li><Link to='mensclothing'>Men's Clothing</Link></li>
                    <li><Link to='womensclothing'>Women's Clothing</Link></li>
                    <ResponsiveIcon 
                      shoppingCart={shoppingCart} 
                      setTotalQuantity={setTotalQuantity}
                      totalQuantity={totalQuantity}
                    />
                </ul>
                <button className='nav-slider' onClick={() => handleNavSlider(setIsActive)}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </button>
            </nav>
            <div className='nav-filler'></div>
            <main>
              <Outlet context={{"set": setShoppingCart, "state": shoppingCart}}/>
            </main>
        </>

    )
}

export default App
