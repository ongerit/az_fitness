import React from 'react';
import './SideNav.css';
import ToggleButton from './ToggleButton'

const SideNav = props =>(
    <nav className='side-nav'>
        <div>
            <ToggleButton click={props.navClickHandler}/>
        </div>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Nutrition</a></li>
            <li><a href='/'>Store</a></li>
            <li><a href='/'>Contact</a></li>
        </ul>
    </nav> 
);

export default SideNav;