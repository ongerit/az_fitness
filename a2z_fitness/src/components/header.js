import React from 'react'
import { Link } from "gatsby"
import './header.css'
import logo from '../components/images/logo.png'
import ToggleButton from './SideNav/ToggleButton';
import './SideNav/ToggleButton.css';
import SideNav from '../components/SideNav/SideNav';

class Header extends React.Component {
    state = {
        sideNavOpen: false
    };

    navToggleClickHandler = () =>{
        this.setState((prevState) => {
            return {sideNavOpen: !prevState.sideNavOpen}
        });  
    };
    render(){
        let sideNav;
        if(this.state.sideNavOpen){
            sideNav = <SideNav />;
        }
        return(
            <div>
                <header className='header'>
                    <div className='header-content'>
                        <div className='header-logo'>
                            <a href="/index.js" alt='logo'> <img src={logo} alt='a2z logo'></img></a>
                        </div> 
                        <div className='menu'>
                            <ToggleButton navClickHandler={()=>this.navToggleClickHandler()}/>
                        </div>
                        {sideNav}
                        {/* <SideNav /> */}
                        <div className='header-nav'> 
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/'>Nutrition</Link></li>
                                <li><Link to='/store/'>Store</Link></li>
                                <li><Link to='/'>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
export default Header;



