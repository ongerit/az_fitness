import React from 'react'
import './footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

const Footer = () =>{
    return(
        <footer className='footer'>
        <div className='footer-container'>
            <div className='company'>
                    <h4>&copy; A2Z Fitness LLC</h4>
            </div>
            <div className='social'>
                <FontAwesomeIcon icon={['fab', 'instagram']}  size='3x' />
            </div>
        </div>
        </footer>
    )
}

export default Footer;