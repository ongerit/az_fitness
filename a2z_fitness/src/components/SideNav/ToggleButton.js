import React from 'react';
import './ToggleButton.css';


const ToggleButton = props =>(
    <div>
    <div className='hamburger' onClick={props.click}>
        <button className='toggle-button'>
            <div className='toggle-button_line'></div>
            <div className='toggle-button_line'></div>
            <div className='toggle-button_line'></div>
        </button>
    </div>
    </div> 
);

export default ToggleButton;
