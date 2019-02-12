import React from "react"
import Header from "../components/header";
import Footer from "../components/footer"
import '../components/index.css'

/** Home page */
export default () => (
    <div>
        <Header />
        <div className='container'>
            <div className='pt-container'>
                <h1>Personal Training</h1>
                <p>This is the section to highlight the personal training
                    services I provide.  Also, will describe my 
                    Individual training services I provide.
                </p>
                <button>Learn More</button>
            </div>
           
            <div className='group-container'>
                <h1>Group classes</h1>
                <p>section where I will describe my group training
                    services I provide.
                </p>
            </div>

            <div className='sports-container'>
                <h1>Sports Training</h1>
                <p>Section where I highlight sports specific training</p>
            </div>
        </div>
        <Footer />
    </div>
) 
