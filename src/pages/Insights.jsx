import { useState } from 'react';
import { Link } from 'react-router-dom';
import { insightsData } from '../data/insightsData';
import './Insights.css';

const Insights = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Design Trends', 'Brand Strategy', 'Digital', 'Case Studies'];

    // Use imported data
    const articles = insightsData;

    const filteredArticles = selectedCategory === 'All'
        ? articles
        : articles.filter(article => article.category === selectedCategory);

    const featuredArticles = articles.filter(article => article.featured);

    return (
        <section className="insights-page">
            <div className="container">
                {/* Hero Section */}
                <div className="insights-hero">
                    <h1 className="insights-title">
                        Insights & <span className="text-gold">Inspiration</span>
                    </h1>
                    <p className="insights-subtitle">
                        Thoughts on design, branding, and creating meaningful visual experiences
                    </p>
                </div>

                {/* Featured Articles */}
                <div className="featured-section">
                    <h2 className="section-heading">Featured Articles</h2>
                    <div className="featured-grid">
                        {featuredArticles.map((article) => (
                            <article key={article.id} className="featured-card">
                                <Link to={`/insights/${article.id}`} className="featured-link-wrapper">
                                    <div className="featured-image">
                                        {article.image ? (
                                            <img src={article.image} alt={article.title} />
                                        ) : (
                                            <div className="featured-placeholder">
                                                <span className="placeholder-icon">📝</span>
                                            </div>
                                        )}
                                        <span className="category-badge">{article.category}</span>
                                    </div>
                                    <div className="featured-content">
                                        <h3 className="article-title">{article.title}</h3>
                                        <p className="article-excerpt">{article.excerpt}</p>
                                        <div className="article-meta">
                                            <span className="meta-date">{article.date}</span>
                                            <span className="meta-divider">•</span>
                                            <span className="meta-read-time">{article.readTime}</span>
                                        </div>
                                        <span className="read-more-btn">
                                            Read Article <span className="arrow">→</span>
                                        </span>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Category Filter */}
                <div className="category-filter">
                    <h2 className="section-heading">All Articles</h2>
                    <div className="filter-buttons">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="articles-grid">
                    {filteredArticles.map((article) => (
                        <article key={article.id} className="article-card">
                            <Link to={`/insights/${article.id}`} className="article-link-wrapper">
                                <div className="article-image">
                                    <div className="article-placeholder">
                                        <span className="placeholder-icon">✍️</span>
                                    </div>
                                    <span className="category-tag">{article.category}</span>
                                </div>
                                <div className="article-body">
                                    <h3 className="article-card-title">{article.title}</h3>
                                    <p className="article-card-excerpt">{article.excerpt}</p>
                                    <div className="article-footer">
                                        <div className="article-meta-small">
                                            <span>{article.date}</span>
                                            <span>•</span>
                                            <span>{article.readTime}</span>
                                        </div>
                                        <span className="read-link">Read →</span>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <div className="newsletter-cta">
                    <div className="newsletter-content">
                        <h3>Stay Inspired</h3>
                        <p>Get design insights and creative inspiration delivered to your inbox</p>
                        <form
                            className="newsletter-form"
                            action="https://formsubmit.co/brianalili4@gmail.com"
                            method="POST"
                        >
                            <input type="hidden" name="_subject" value="New Newsletter Subscription" />
                            <input type="hidden" name="_captcha" value="true" />
                            <input type="hidden" name="_autoresponse" value="Thank you for subscribing to PecPod Insights! You'll now receive our latest design trends and updates directly to your inbox." />

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" className="newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Insights;
