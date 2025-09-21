import React from 'react';
import FadeInSection from './FadeInSection.js';
import './About.css';

const About = () => (
    <section id="about" className="about-section">
        <div className="container about-container">
            <FadeInSection>
                <img 
                    src="/favicon.png" 
                    alt="Kalpita Khare" 
                    className="about-image"
                />
            </FadeInSection>
            <div className="about-content">
                <FadeInSection>
                    <h2 className="about-title">About Me</h2>
                    <p className="about-text">
                        Hello! I'm Kalpita Khare, an aspiring design student with a passion for bringing ideas to life through visual storytelling. My journey in art has been one of constant exploration, from the fine details of sketching to the dynamic world of stop-motion animation.
                    </p>
                    <p className="about-text">
                        I am currently preparing for competitive design entrance exams like UCEED and NID. This portfolio is a curated collection of my work, showcasing my skills, my creative process, and my dedication to the craft of design.
                    </p>
                </FadeInSection>
            </div>
        </div>
    </section>
);

export default About;

