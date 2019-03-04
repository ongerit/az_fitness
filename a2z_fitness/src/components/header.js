import React from 'react'

import './header.css'
import logo from '../components/images/logo.png'

const Header = () =>(
    <div>
        <header className='header'>
            <div className='header-content'>
                <div className='header-logo'>
                    <img src={logo} alt='a2z logo'></img>
                </div> 
                <div className='header-nav'> 
                    <ul>
                        <li>Home</li>
                        <li>Nutrition</li>
                        <li>Store</li>
                        <li>Contact</li>
                    </ul>
                </div>
               </div>
        </header>
    </div>
)
export default Header;
