import React, { useEffect } from 'react';
import { portfolioItems } from '../data/portfolioData.js';
import FadeInSection from './FadeInSection.js';
import { ArrowLeft } from 'lucide-react';
import './PortfolioPage.css';

const PortfolioPage = ({ onClose, onOpenLightbox }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="portfolio-page">
            <div className="portfolio-page-header">
                <button onClick={onClose} className="back-button">
                    <ArrowLeft size={20} />
                    <span>Return to Home</span>
                </button>
                <h1 className="portfolio-page-title">Complete Portfolio</h1>
            </div>
            <div className="portfolio-grid-full">
                {portfolioItems.map((item) => (
                    <FadeInSection key={item.id}>
                        <div className="portfolio-item" onClick={() => onOpenLightbox(item)}>
                            <img src={item.imageUrl} alt={item.title} className="portfolio-image" />
                            <div className="portfolio-item-overlay">
                                <h3>{item.title}</h3>
                                <p>{item.category}</p>
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </div>
    );
};

export default PortfolioPage;
