import React from 'react'

import './header.css'
import logo from '../components/images/logo.png'

const Header = () =>(
    <div>
        <header className='header'>
            {/* <div className='header-overlay'> */}
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
            {/* </div> */}
        </header>
    </div>
)
export default Header;
            /**code to import video component */
           {/* <div className='fullscreen-video-wrap'>  */}
                {/* <Video /> {/* I would like to make this  */}
                {/* dynamically populate the video for the index
                page only */} 
           {/* </div> */}