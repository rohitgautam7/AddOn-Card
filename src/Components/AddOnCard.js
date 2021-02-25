import React from 'react';
import ArrowButton from './ArrowButton';
import AddButton from './AddButton';
import Img from '../Assets/img.png';
import './AddOnCard.css';

export default function AddOnCard() {
    return (
        <div class="main-container">
            <div class="image-container">
                <div class="image-div">
                    <img src={Img} alt="item-image"/>
                </div>
            </div>
            <div class="card-bottom">
                <div class="text-div">
                    <div class="item-heading">
                        <p>Geyser Cleansing</p>
                    </div>
                    <div class="price-div">
                        <p>69</p>
                        <p class="actual-price">138</p>
                    </div>
                </div>
                <ArrowButton/>
                <AddButton/>
            </div>
        </div>
    );
}
