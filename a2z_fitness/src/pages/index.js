import React from "react"
import Header from "../components/header";
import Footer from "../components/footer"
import '../components/index.css'

export default () => (
    <div>
        <Header />
        <div>
            <section className='section section-a'>
            <div className='container'>
                <h1>Sports Specific Training and Individual training</h1>
                <p>This is the section to highlight the sports section
                    specific training services I provide.  Also, will describe my 
                    Individual training services I provide.
                </p>
            </div>
            </section>

            <section className='section section-b'>
            <div className='container'>
                <h1>Group classes</h1>
                <p>section where I will describe my group training
                    services I provide.
                </p>
            </div>
            </section>
        </div>
        <Footer />
    </div>
) 
