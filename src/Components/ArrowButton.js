import React from 'react';
import icon from '../Assets/arrowicon.png';
import './ArrowButton.css';

export default function ArrowButton() {
    return (
        <div class="arrow-icon">
            <img src={icon} alt="arrowicon"/>
        </div>
    )
}
