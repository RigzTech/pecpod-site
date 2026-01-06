import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { insightsData } from '../data/insightsData';
import './InsightDetail.css';

const InsightDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find article
    const article = insightsData.find(a => a.id === parseInt(id));

    // Get related articles (exclude current, take 3 random)
    const relatedArticles = insightsData
        .filter(a => a.id !== parseInt(id))
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    // Scroll to top on mount or id change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <div className="insight-not-found">
                <div className="container">
                    <h2>Article not found</h2>
                    <button onClick={() => navigate('/insights')} className="back-link">
                        ← Back to Insights
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="insight-page-wrapper">
            <article className="insight-document-page">
                <div className="document-nav">
                    <div className="container">
                        <Link to="/insights" className="back-link">
                            ← Back to Insights
                        </Link>
                    </div>
                </div>

                <header className="document-header">
                    <div className="container">
                        <div className="header-meta">
                            <span className="category-badge">{article.category}</span>
                            <span className="read-time">{article.readTime}</span>
                        </div>
                        <h1 className="document-title">{article.title}</h1>
                        <p className="document-date">{article.date}</p>
                    </div>
                </header>

                {article.image && (
                    <div className="document-hero-image">
                        <div className="container">
                            <img src={article.image} alt={article.title} />
                        </div>
                    </div>
                )}

                <div className="document-content-wrapper">
                    <div className="container">
                        <div
                            className="document-body"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Author/Share Section */}
                        <div className="document-author">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Author" className="author-avatar" />
                            <div className="author-info">
                                <h4>Written by PecPod Team</h4>
                                <p>Digital Strategy & Design Experts</p>
                            </div>
                        </div>

                        <div className="document-footer">
                            <div className="share-links">
                                <span>Share this insight:</span>
                                <button className="share-btn">LinkedIn</button>
                                <button className="share-btn">Twitter</button>
                                <button className="share-btn">Email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Articles Section */}
            <section className="related-articles">
                <div className="container">
                    <h2 className="related-title">More Insights</h2>
                    <div className="related-grid">
                        {relatedArticles.map(related => (
                            <Link to={`/insights/${related.id}`} key={related.id} className="related-card">
                                <div className="related-image">
                                    <img src={related.image} alt={related.title} />
                                </div>
                                <div className="related-content">
                                    <span className="related-category">{related.category}</span>
                                    <h3>{related.title}</h3>
                                    <span className="related-read-time">{related.readTime}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InsightDetail;
