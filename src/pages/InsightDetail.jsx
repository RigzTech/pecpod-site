import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './InsightDetail.css';

const InsightDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [article, setArticle] = useState(null);
    const [relatedArticles, setRelatedArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchInsight = async () => {
            setLoading(true);
            try {
                // Fetch the main article
                const res = await axios.get(`/api/insights/${id}`);
                setArticle(res.data);

                // Fetch all/related insights
                // Optimization: Use a tailored endpoint
                const allRes = await axios.get('/api/insights');
                const all = allRes.data;

                const related = all
                    .filter(a => a.id !== id && a._id !== id) // Handle different ID types if needed
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3);

                setRelatedArticles(related);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchInsight();
    }, [id]);

    if (loading) {
        return <div style={{ padding: '100px', textAlign: 'center' }}>Loading Article...</div>;
    }

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

                {/* Immersive Hero Section */}
                <header className="creative-hero">
                    <div className="container">
                        <div className="hero-inner">
                            <div className="hero-content animate-fade-in-up">
                                <div className="meta-pill">
                                    <span className="hero-category">{article.category}</span>
                                    <span className="hero-dot">•</span>
                                    <span className="hero-time">{article.readTime}</span>
                                </div>
                                <h1 className="hero-title">{article.title}</h1>

                                <div className="hero-author-block">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Author" className="hero-avatar" />
                                    <div className="hero-author-text">
                                        <span className="by-line">Written by</span>
                                        <span className="author-name">{article.author || 'PecPod Team'}</span>
                                    </div>
                                    <span className="hero-date">{article.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Background decoration or image if desired inline */}
                </header>

                {article.image && (
                    <div className="creative-featured-image">
                        <div className="container">
                            <div className="image-frame hover-scale-subtle">
                                <img src={article.image} alt={article.title} />
                            </div>
                        </div>
                    </div>
                )}

                <div className="document-content-wrapper">
                    <div className="container">
                        <div className="document-body">
                            {/* Advanced Creative Parser */}
                            {article.content && (() => {
                                const lines = article.content.split('\n').filter(p => p.trim() !== '');
                                let firstParagraphFound = false;

                                return lines.map((line, index) => {
                                    const trimmed = line.trim();

                                    // 1. Detection Logic
                                    const isHeading = trimmed.length < 80 && !/[.!?]$/.test(trimmed) && !trimmed.startsWith('"') && !trimmed.startsWith('-');
                                    const isQuote = trimmed.startsWith('"') || trimmed.startsWith('“');
                                    const isList = trimmed.startsWith('- ') || trimmed.startsWith('• ');
                                    const isImage = trimmed.startsWith('http') && (trimmed.match(/\.(jpeg|jpg|gif|png)$/i) != null);

                                    // 2. Rendering Logic
                                    if (isHeading) {
                                        return (
                                            <h3 key={index} className="creative-subhead">
                                                <span>{trimmed}</span>
                                            </h3>
                                        );
                                    }

                                    if (isQuote) {
                                        // Remove quotes for cleaner display
                                        const cleanQuote = trimmed.replace(/^["“]|["”]$/g, '');
                                        return (
                                            <blockquote key={index} className="creative-quote">
                                                <p>{cleanQuote}</p>
                                            </blockquote>
                                        );
                                    }

                                    if (isList) {
                                        return (
                                            <ul key={index} className="creative-list">
                                                <li>{trimmed.replace(/^[-•]\s*/, '')}</li>
                                            </ul>
                                        );
                                    }

                                    if (isImage) {
                                        return (
                                            <figure key={index} className="creative-figure">
                                                <img src={trimmed} alt="Article visual" className="creative-body-image" />
                                                <figcaption>Visual from {article.title}</figcaption>
                                            </figure>
                                        );
                                    }

                                    // Standard Paragraph with Drop Cap logic
                                    const className = !firstParagraphFound
                                        ? "creative-paragraph drop-cap"
                                        : "creative-paragraph";

                                    if (!isHeading && !isQuote && !isList && !isImage) firstParagraphFound = true;

                                    return (
                                        <p key={index} className={className}>
                                            {trimmed}
                                        </p>
                                    );
                                });
                            })()}
                        </div>

                        {/* Social Share (Redesigned) */}
                        <div className="creative-footer">
                            <div className="divider-line"></div>
                            <div className="share-section">
                                <span>Share this story</span>
                                <div className="share-icons">
                                    <button className="share-icon">LN</button>
                                    <button className="share-icon">TW</button>
                                    <button className="share-icon">FB</button>
                                </div>
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
                            <Link to={`/insights/${related.id}`} key={related._id} className="related-card">
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
