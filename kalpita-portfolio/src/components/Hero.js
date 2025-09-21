import React from 'react';
import FadeInSection from './FadeInSection.js';
import './Hero.css';

const Hero = () => (
    <section className="hero" id="home">
        <video className="hero-video" autoPlay loop muted playsInline>
            <source src="/bgvid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="hero-content">
            <FadeInSection>
                <h1 className="hero-title">Creative Thinker </h1>  
                <h1 className="hero-title">& </h1>  
                <h1 className="hero-title"> Visual Storyteller</h1>
                <p className="hero-subtitle">
                    Exploring the intersection of art, design, and motion. Welcome to my portfolio of sketches, stop-motion videos, and creative projects for UCEED & NID.
                </p>
            </FadeInSection>
        </div>
    </section>
);

export default Hero;

