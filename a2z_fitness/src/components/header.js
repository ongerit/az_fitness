import React from 'react'
import Video from './video'
import './header.css'

const Header = () =>(
    <div>
        <header className='header'>
           <div className='fullscreen-video-wrap'> 
                <Video /> {/* I would like to make this 
                dynamically populate the video for the index
                page only */}
           </div>

           <div className='header-overlay'>
                <div className='header-content'>
                    <h1>A2Z Fitness</h1>
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