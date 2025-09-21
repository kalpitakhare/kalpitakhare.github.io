import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="container footer-container">
            <p>&copy; {new Date().getFullYear()} Kalpita Khare. All Rights Reserved.</p>
        </div>
    </footer>
);

export default Footer;

