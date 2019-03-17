import React from 'react';
import { Link } from "gatsby"
import './SideNav.css';
import ToggleButton from './ToggleButton'

const SideNav = props =>(
    <nav className='side-nav'>
        <div>
            <ToggleButton click={props.navClickHandler}/>
        </div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Nutrition</Link></li>
            <li><Link to='/store/'>Store</Link></li>
            <li><Link to='/'>Contact</Link></li>
        </ul>
    </nav> 
);

export default SideNav;