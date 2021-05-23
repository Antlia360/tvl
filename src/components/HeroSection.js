import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';
import Video5 from './vedios/video-6.mp4';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video autoPlay loop muted>
                <source src={Video5} type='video/mp4' />
            </video>
            <h1> ADVENTURE AWAITS</h1>
            <p> What are you here for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' /> </Button>
            </div>


        </div>
    );
}

export default HeroSection;

