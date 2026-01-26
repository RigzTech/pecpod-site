import { Link } from 'react-router-dom';
import './Services.css'; // Reusing styles

const HomeServices = () => {
    const services = [
        { id: 'corporate-design', title: 'Corporate Design', icon: '01' },
        { id: 'report-design', title: 'Report Design', icon: '02' },
        { id: 'brand-identity', title: 'Brand Identity', icon: '03' },
        { id: 'print-design', title: 'Print Design', icon: '04' },
        { id: 'event-design', title: 'Event Design', icon: '05' }
    ];

    return (
        <section className="section bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="section-label">What We Do</span>
                    <h2 className="section-title">Our <span className="text-gold">Services</span></h2>
                </div>

                <div className="services-grid-home">
                    {services.map((service, index) => (
                        <Link to={`/services`} key={index} className="service-card-home hover-lift">
                            <div className="service-icon-home">{service.icon}</div>
                            <h3 className="service-title-home">{service.title}</h3>
                            <span className="service-link-home">Explore &rarr;</span>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <Link to="/services" className="btn-secondary">View All Services</Link>
                </div>
            </div>

            <style>{`
                .bg-light { background-color: var(--color-light-grey); }
                .services-grid-home {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-top: 2rem;
                }
                .service-card-home {
                    background: var(--color-white);
                    padding: 2rem;
                    border-radius: 12px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    border: 1px solid rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                }
                .service-card-home:hover {
                    border-color: var(--color-gold);
                }
                .service-icon-home {
                    font-family: var(--font-display);
                    font-size: 2rem;
                    color: var(--color-gold-dark);
                    font-weight: 700;
                    opacity: 0.5;
                }
                .service-title-home {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0;
                }
                .service-link-home {
                    font-size: 0.9rem;
                    color: var(--color-mid-grey);
                    opacity: 0;
                    transform: translateY(10px);
                    transition: all 0.3s ease;
                }
                .service-card-home:hover .service-link-home {
                    opacity: 1;
                    transform: translateY(0);
                }
                .mt-5 { margin-top: 3rem; }
                .mb-5 { margin-bottom: 3rem; }
            `}</style>
        </section>
    );
};

export default HomeServices;
