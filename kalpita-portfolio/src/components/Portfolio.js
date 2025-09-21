import React from 'react';
import FadeInSection from './FadeInSection.js';
import './Portfolio.css';

const Portfolio = ({ items, onOpenLightbox, onShowMore }) => {
    // Show only the first 6 items for the homepage preview
    const previewItems = items.slice(0, 4);

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="portfolio-container">
                <FadeInSection>
                    <h2 className="section-title">Portfolio</h2>
                </FadeInSection>
                <div className="portfolio-grid">
                    {previewItems.map((item) => (
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
                <FadeInSection>
                    <div className="show-more-container">
                        <button onClick={onShowMore} className="show-more-button">
                            Show More
                        </button>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Portfolio;

