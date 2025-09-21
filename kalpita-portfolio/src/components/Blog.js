import React from 'react';
import { blogPosts } from '../data/blogData.js';
import FadeInSection from './FadeInSection.js';
import './Blog.css';

const Blog = ({ onPostSelect }) => {
    return (
        <section id="blog" className="blog-section">
            <div className="blog-container">
                <FadeInSection>
                    <h2 className="blog-title">From the Sketchbook</h2>
                </FadeInSection>
                <div className="blog-posts-container">
                    <div className="blog-posts">
                        {blogPosts.map((post) => (
                             // By adding the onClick handler here, we tell the app which post to open.
                             <article 
                                className="blog-post" 
                                key={post.id} 
                                onClick={() => onPostSelect(post)}
                             >
                                <img src={post.imageUrl} alt={post.title} className="blog-post-image" />
                                <div className="blog-post-content">
                                    <h3 className="blog-post-title">{post.title}</h3>
                                    <p className="blog-post-date">{post.date}</p>
                                    <div className="blog-post-body">
                                        <p>{post.preview}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;

