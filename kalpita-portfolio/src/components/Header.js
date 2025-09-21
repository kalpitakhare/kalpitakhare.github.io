import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#about', label: 'About' },
        { href: '#contact', label: 'Contact' },
        { href: '#blog', label: 'Blog' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#hero" className="logo">Kalpita Khare</a>
                
                <nav className={`nav-desktop`}>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
                    ))}
                </nav>

                <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
            
            <nav className={`nav-mobile ${isOpen ? 'open' : ''}`}>
                 {navLinks.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="nav-link-mobile">{link.label}</a>
                ))}
            </nav>
        </header>
    );
};

export default Header;

