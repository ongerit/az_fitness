import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import '../components/index.css'
import promo from'../components/images/promotest.mp4'

const buttonStyles = {
    fontSize: "13px",
    textAlign: "center",
    color: "#fff",
    outline: "none",
    padding: "12px 60px",
    boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
    backgroundColor: "#DB5461",
    borderRadius: "6px",
    letterSpacing: "1.5px",
}
/**Home page**/
export default () => (
    <div>
        <Header />
        <div className='container'>

            <div className='sports-container'>
                <div className='sports-about'>
                    <h1>Sports Skills Training</h1>
                    <p>
                        A2Z Fitness provides elite sports specific training. The 
                        training will help bring out the best out of any athlete 
                        skills, conditioning, strength.  I have experience as a collegiate
                        athlete and trained with the best athletes.  I have trained top 
                        athletes that have gone to play in both the collegiate and professional
                        level.
                    </p>
                    <p>If you want to take your game to the next level. My program is for you!</p>
                    <button style={buttonStyles}>Join Now</button>
                </div>
                <div className='sports-img'>
                    
                </div>
            </div>
           
            <div className='pt-container'>
                <h1>Personal Trainer & Nutrition</h1>
                <p>
                    My personal training and nutrition plan is top notch.  I do not 
                    promise quick results like others.  I promise a plan that will allow
                    you to achieve your fitness goals without feeling constraint.  If you follow
                    my plan you will achieve all your fitness goals and still be able to eat all
                    the foods you enjoy. Within reason of course!  If you want more information 
                    please contact me. 
                </p>
                <button>Learn More</button>
            </div>

            <div className='group-container'>
                <div className='signature'>
                    <h1>Group Fitness Classes</h1>
                    <p>
                        I also host group fitness classes at Signature Fitness.  Come join me in a
                        fun way to workout.  I host HIIT, Kettleball sessions.  
                    </p>
                </div>
                <div className='group-video'>
                    <video controls='controls' width='550' height='350'>
                        <source src={promo} type='video/mp4'></source>
                    </video>
                </div>
            </div>
        </div>
        <Footer />
    </div>
) 
