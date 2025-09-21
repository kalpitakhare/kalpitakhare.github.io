import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import './Lightbox.css';

const Lightbox = ({ item, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className="lightbox-backdrop" onClick={onClose}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="lightbox-close-button">
                    <X size={28} />
                </button>
                {item.type === 'video' ? (
                    <div className="video-container">
                        <iframe
                            src={item.videoUrl}
                            title={item.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ) : (
                    <img src={item.imageUrl} alt={item.title} className="lightbox-image" />
                )}
                 <div className="lightbox-caption">
                    <h3 className="caption-title">{item.title}</h3>
                    <p className="caption-category">{item.category}</p>
                </div>
            </div>
        </div>
    );
};

export default Lightbox;

