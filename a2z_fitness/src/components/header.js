import React from 'react'
import './header.css'
import logo from '../components/images/logo.png'
import ToggleButton from './SideNav/ToggleButton';
import './SideNav/ToggleButton.css';
import SideNav from '../components/SideNav/SideNav';

const Header = () =>(
    <div>
        <header className='header'>
            <div className='header-content'>
                <div className='header-logo'>
                    <a href="/index.js" alt='logo'> <img src={logo} alt='a2z logo'></img></a>
                </div> 
                <div>
                    <ToggleButton />
                </div>
                <SideNav />
                <div className='header-nav'> 
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>Nutrition</a></li>
                        <li><a href='/'>Store</a></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
                </div>
               </div>
        </header>
    </div>
)
export default Header;
