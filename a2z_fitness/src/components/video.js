import React from "react"
import promo from '../components/images/promotest.mp4'

const Video = () => (
    <div>
        <video className='background-video' autoPlay muted >
            <source src={promo} type='video/mp4'></source>
        </video>
    </div>  
) 

export default Video;