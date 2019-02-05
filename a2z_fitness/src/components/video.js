import React from "react"
import promo from './promotest.mp4'

const Video = () => (
    <div>
        <video className='background-video' autoPlay muted >
            <source src={promo} type='video/mp4'></source>
        </video>
    </div>  
) 

export default Video;