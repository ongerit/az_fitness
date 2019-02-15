import React from "react"
import Header from "../components/header";
import Footer from "../components/footer"
import '../components/index.css'
import promo from'../components/images/promo.mov'

/** Home page */
export default () => (
    <div>
        <Header />
        <div className='container'>

            <div className='sports-container'>
                <div className='description'>
                    <h1>Sports Skills Training</h1>
                    <p>
                        A2Z Fitness provides elite sports specific training. The 
                        training will help bring out the best out of any athlete 
                        skills, conditioning, strength.
                    </p>
                    <h4>If you want to become the best in your sport.  My program will get you there</h4>
                    <button>Contact Me</button>
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
                <h1>Group Fitness Classes</h1>
                <p>
                    I also host group fitness classes at Signature Fitness.  Come join me in a
                    fun way to workout.  I host HIIT, Kettleball sessions.  
                </p>
                <div className='group-video'>
                    <video src={promo}></video>{/**I have to cut the video */}
                </div>
            </div>
        </div>
        <Footer />
    </div>
) 
