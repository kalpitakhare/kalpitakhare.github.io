import React, { useState } from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Portfolio from './components/Portfolio.js';
import Blog from './components/Blog.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Lightbox from './components/Lightbox.js';
import BlogDetail from './components/BlogDetail.js';
import PortfolioPage from './components/PortfolioPage.js'; // Import the new Portfolio Page
import { portfolioItems } from './data/portfolioData.js';
import './App.css';

function App() {
    const [lightboxData, setLightboxData] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null);
    const [showPortfolioPage, setShowPortfolioPage] = useState(false); // State for portfolio page

    const openLightbox = (item) => {
        setLightboxData(item);
    };

    const closeLightbox = () => {
        setLightboxData(null);
    };

    const handlePostSelect = (post) => {
        setSelectedPost(post);
    };

    const handlePostClose = () => {
        setSelectedPost(null);
    };

    // --- Handlers for Portfolio Page ---
    const handleShowPortfolio = () => {
        setShowPortfolioPage(true);
    };

    const handleClosePortfolio = () => {
        setShowPortfolioPage(false);
    };
    
    // --- Render Logic ---

    if (showPortfolioPage) {
        return <PortfolioPage onClose={handleClosePortfolio} onOpenLightbox={openLightbox} />;
    }

    if (selectedPost) {
        return <BlogDetail post={selectedPost} onClose={handlePostClose} />;
    }

    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <Portfolio 
                    items={portfolioItems} 
                    onOpenLightbox={openLightbox} 
                    onShowMore={handleShowPortfolio} 
                />
                <Blog onPostSelect={handlePostSelect} />
                <About />
                <Contact />
            </main>
            <Footer />
            {lightboxData && <Lightbox item={lightboxData} onClose={closeLightbox} />}
        </div>
    );
}

export default App;

