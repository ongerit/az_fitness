import React from 'react'
import Video from './video'
import './layout.css'

export default({children}) =>(
    <div>
        <header className='header container'>
           <div className='fullscreen-video-wrap'> 
                <Video />
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