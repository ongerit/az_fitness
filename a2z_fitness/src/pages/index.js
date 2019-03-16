import React, { Component } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Video from '../components/video'
import '../components/index.css'
import promo from'../components/images/promotest.mp4'
import SideNav from '../components/SideNav/SideNav'

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
class App extends Component{
    
    render(){
       
        return(
            <div> 
            <Header />
         
            <Video />
            
            <div className='container'>
                <div className='sports-container'>
                    <div className='sports-about'>
                        <h2>Sports Training</h2>
                        <p>
                            A2Z Sports Training program is guaranteed to help you reach the next level.
                            If you are ready to take the next step in your game.  Joining my program is sure to 
                            help you advance in your sport.  
                        </p>                  
                        <button style={buttonStyles}>Join Now</button>
                    </div>
                </div>
                <div className='pt-container'>
                    <div className='pt-about'>
                        <h1>Personal Trainer & Nutrition</h1>
                        <p>
                            My personal training and nutrition plan is top notch.  I do not 
                            promise quick results like others.  I promise a plan that will allow
                            you to achieve your fitness goals without feeling constraint.  If you follow
                            my plan you will achieve all your fitness goals and still be able to eat all
                            the foods you enjoy. Within reason of course!  If you want more information 
                            please contact me. 
                        </p>
                        <div className='pt-btn'>
                        <button style={buttonStyles}>Learn More</button>
                        </div>
                    </div>
                </div>
           
                <div className='group-container'>
                    <div className='signature'>
                      <div className='sig-about'>
                        <h1>Group Fitness Classes</h1>
                        <p>
                            I also host group fitness classes at Signature Fitness.  Come join me in a
                            fun way to workout.  I host HIIT, Kettleball sessions. My classes
                            range from 5-30 people each class. The classes are very intimate
                            which allows me to work with everyone and guide them through 
                            the workout.  My classes are on tuesdays and thursdays at 7 pm and Friday mornings
                            at 6 am.  The classes are held at <a href='www.signature.com' target='_blank'>signature fitness.</a> 
                        </p>
                      </div>
                    </div>
                    <div className='group-video'>
                        <video controls='controls' width='650' height='450'>
                            <source src={promo} type='video/mp4'></source>
                        </video>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}

export default App;