import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import './BlogDetail.css';

const BlogDetail = ({ post, onClose }) => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Add a guard clause to prevent rendering if the post data isn't ready.
    // This is a robust way to prevent this type of error.
    if (!post) {
        return null; // Or you could return a loading spinner here
    }

    return (
        <div className="blog-detail-overlay">
            <div className="blog-detail-container">
                <button onClick={onClose} className="back-button">
                    <ArrowLeft size={20} />
                    <span>Return to Portfolio</span>
                </button>
                <article className="blog-detail-content">
                    <h1 className="blog-detail-title">{post.title}</h1>
                    <p className="blog-detail-date">{post.date}</p>
                    <img src={post.imageUrl} alt={post.title} className="blog-detail-image" />
                    <div className="blog-detail-body">
                        {post.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogDetail;

