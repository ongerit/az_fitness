import React from 'react';
import './ToggleButton.css';

const ToggleButton = props =>(
    <div className='hamburger'>
        <button className='toggle-button'>
            <div className='toggle-button_line'></div>
            <div className='toggle-button_line'></div>
            <div className='toggle-button_line'></div>
        </button>
    </div>
);

export default ToggleButton;
