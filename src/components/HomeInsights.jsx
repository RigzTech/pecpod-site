import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeInsights = () => {
    const [latestInsights, setLatestInsights] = useState([]);

    useEffect(() => {
        const fetchInsights = async () => {
            try {
                const res = await axios.get('/api/insights');
                // Slice top 3
                setLatestInsights(res.data.slice(0, 3));
            } catch (err) {
                console.error(err);
            }
        };
        fetchInsights();
    }, []);

    return (
        <section className="section">
            <div className="container">
                <div className="header-flex mb-5">
                    <div>
                        <span className="section-label">Latest News</span>
                        <h2 className="section-title">Insights & <span className="text-gold">Articles</span></h2>
                    </div>
                    <Link to="/insights" className="btn-text-arrow no-mobile">View All &rarr;</Link>
                </div>

                <div className="insights-grid">
                    {latestInsights.map((insight) => (
                        <div key={insight._id} className="insight-card group">
                            <div className="insight-image-wrapper">
                                <img src={insight.image} alt={insight.title} className="insight-image" />
                                <div className="insight-overlay">
                                    <Link to={`/insights/${insight.id}`} className="btn-circle">
                                        &rarr;
                                    </Link>
                                </div>
                            </div>
                            <div className="insight-content">
                                <span className="insight-category">{insight.category}</span>
                                <h3 className="insight-title">
                                    <Link to={`/insights/${insight.id}`}>{insight.title}</Link>
                                </h3>
                                <p className="insight-excerpt">{insight.excerpt}</p>
                                <span className="insight-date">{insight.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5 mobile-only">
                    <Link to="/insights" className="btn-secondary">View All Insights</Link>
                </div>
            </div>

            <style>{`
                .header-flex {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }
                .insights-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }
                .insight-card {
                    background: var(--color-white);
                }
                .insight-image-wrapper {
                    position: relative;
                    border-radius: 16px;
                    overflow: hidden;
                    aspect-ratio: 16/10;
                    margin-bottom: 1.5rem;
                }
                .insight-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .insight-card:hover .insight-image {
                    transform: scale(1.05);
                }
                .insight-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .insight-card:hover .insight-overlay {
                    opacity: 1;
                }
                .btn-circle {
                    width: 50px;
                    height: 50px;
                    background: var(--color-white);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-black);
                    font-size: 1.2rem;
                    transform: translateY(20px);
                    transition: all 0.3s ease;
                }
                .insight-card:hover .btn-circle {
                    transform: translateY(0);
                }
                .insight-category {
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-gold-dark);
                    font-weight: 600;
                    display: block;
                    margin-bottom: 0.5rem;
                }
                .insight-title a {
                    font-family: var(--font-display);
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--color-black);
                    line-height: 1.3;
                    transition: color 0.2s ease;
                }
                .insight-title a:hover {
                    color: var(--color-gold);
                }
                .insight-excerpt {
                    font-size: 0.95rem;
                    color: var(--color-mid-grey);
                    margin: 0.8rem 0;
                    line-height: 1.6;
                }
                .insight-date {
                    font-size: 0.85rem;
                    color: #999;
                }
                .mobile-only { display: none; }
                @media (max-width: 768px) {
                    .header-flex { flex-direction: column; align-items: flex-start; gap: 1rem; }
                    .no-mobile { display: none; }
                    .mobile-only { display: block; }
                }
            `}</style>
        </section>
    );
};

export default HomeInsights;
