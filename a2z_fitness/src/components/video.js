import React from "react"
import promo from '../components/images/HIIT-video.mp4'
import '../components/header.css';

const Video = () => (
    <div>
        <div className='header-overlay'>
            <div className='fullscreen-video-wrap'>
                <video className='background-video' loop autoPlay muted >
                    <source src={promo} type='video/mp4'></source>
                </video>
            </div>
        </div>
    </div>  
) 

export default Video;