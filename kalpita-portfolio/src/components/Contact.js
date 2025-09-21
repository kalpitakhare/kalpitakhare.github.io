import React from 'react';
import { Instagram, Linkedin, PenBox, } from 'lucide-react';
import FadeInSection from './FadeInSection.js';
import './Contact.css';

const Contact = () => (
    <section id="contact" className="contact-section">
        <div className="container">
            <FadeInSection>
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-description">
                    I'm always open to new opportunities and collaborations. Feel free to reach out or connect with me on social media.
                </p>
                <a href="mailto:magar.muchhhhhh@gmail.com" className="contact-email">
                    magar.muchhhhhh@gmail.com
                </a>
                <div className="contact-socials">
                    <a href="https://www.instagram.com/magar_muchhhhhh" target="_blank" rel="noopener noreferrer" className="social-link">
                        <Instagram size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/kalpita-khare/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <Linkedin size={28} />
                    </a>
                    <a href="https://rawlykalpita.wordpress.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <PenBox size={28} />
                    </a>
                </div>
            </FadeInSection>
        </div>
    </section>
);

export default Contact;

