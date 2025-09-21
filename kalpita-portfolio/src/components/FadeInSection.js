import React, { useState, useRef, useEffect } from 'react';
import './FadeInSection.css';

const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        const { current } = domRef;
        observer.observe(current);
        return () => observer.unobserve(current);
    }, []);

    return (
        <div
            ref={domRef}
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            {props.children}
        </div>
    );
};

export default FadeInSection;

