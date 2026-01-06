import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { servicesDetailData } from '../data/servicesDetailData';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = servicesDetailData[serviceId];
    const [expandedFaq, setExpandedFaq] = useState(null);

    // If service doesn't exist, redirect to services page
    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    return (
        <div className="service-detail-page">
            {/* Hero Section */}
            <section className="service-hero" style={{ backgroundImage: `url(${service.heroImage})` }}>
                <div className="service-hero-overlay"></div>
                <div className="container">
                    <div className="service-hero-content">
                        <Link to="/services" className="back-link">
                            ← Back to Services
                        </Link>
                        <h1 className="service-hero-title">{service.title}</h1>
                        <p className="service-hero-tagline">{service.tagline}</p>
                        <div className="service-hero-cta">
                            <Link to="/contact" className="btn-primary">{service.cta.primaryButton}</Link>
                            <Link to="/" className="btn-secondary">{service.cta.secondaryButton}</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="service-overview">
                <div className="container">
                    <div className="overview-grid">
                        <div className="overview-content">
                            <h2>{service.overview.title}</h2>
                            <div className="overview-text">
                                {service.overview.description.split('\n\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        <div className="overview-image">
                            <img src={service.overview.image} alt={service.title} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="service-process">
                <div className="container">
                    <h2 className="section-title">{service.process.title}</h2>
                    <div className="process-steps">
                        {service.process.steps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-number">{step.number}</div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <div className="step-deliverables">
                                        <strong>Deliverables:</strong>
                                        <ul>
                                            {step.deliverables.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {service.process.image && (
                        <div className="process-image">
                            <img src={service.process.image} alt="Our Process" />
                        </div>
                    )}
                </div>
            </section>

            {/* Features Section */}
            <section className="service-features">
                <div className="container">
                    <h2 className="section-title">What We Offer</h2>
                    <div className="features-grid">
                        {service.features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-image">
                                    <img src={feature.image} alt={feature.title} />
                                </div>
                                <div className="feature-content">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section (if applicable) */}
            {service.technologies && (
                <section className="service-technologies">
                    <div className="container">
                        <h2 className="section-title">{service.technologies.title}</h2>
                        <p className="technologies-description">{service.technologies.description}</p>
                        <div className="tech-stack">
                            {service.technologies.stack.map((tech, index) => (
                                <div key={index} className="tech-item">
                                    <span className="tech-name">{tech.name}</span>
                                    <span className="tech-category">{tech.category}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Case Studies Section */}
            {service.caseStudies && service.caseStudies.length > 0 && (
                <section className="service-case-studies">
                    <div className="container">
                        <h2 className="section-title">Success Stories</h2>
                        <div className="case-studies-grid">
                            {service.caseStudies.map((study, index) => (
                                <div key={index} className="case-study-card">
                                    <div className="case-study-image">
                                        <img src={study.image} alt={study.title} />
                                    </div>
                                    <div className="case-study-content">
                                        <h3>{study.title}</h3>
                                        <p className="case-study-client">{study.client}</p>
                                        <div className="case-study-section">
                                            <strong>Challenge:</strong>
                                            <p>{study.challenge}</p>
                                        </div>
                                        <div className="case-study-section">
                                            <strong>Solution:</strong>
                                            <p>{study.solution}</p>
                                        </div>
                                        <div className="case-study-results">
                                            <strong>Results:</strong>
                                            <ul>
                                                {study.results.map((result, idx) => (
                                                    <li key={idx}>{result}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Pricing Section (if applicable) */}
            {service.pricing && (
                <section className="service-pricing">
                    <div className="container">
                        <h2 className="section-title">{service.pricing.title}</h2>
                        <p className="pricing-description">{service.pricing.description}</p>
                        <div className="pricing-grid">
                            {service.pricing.packages.map((pkg, index) => (
                                <div key={index} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
                                    {pkg.popular && <span className="popular-badge">Most Popular</span>}
                                    <h3>{pkg.name}</h3>
                                    <p className="package-description">{pkg.description}</p>
                                    <ul className="package-features">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <p className="package-ideal"><strong>Ideal for:</strong> {pkg.ideal}</p>
                                    <Link to="/contact" className="btn-outline">Get Started</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            <section className="service-faqs">
                <div className="container">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {service.faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={expandedFaq === index}
                                >
                                    <span>{faq.question}</span>
                                    <span className={`faq-icon ${expandedFaq === index ? 'expanded' : ''}`}>
                                        +
                                    </span>
                                </button>
                                <div className={`faq-answer ${expandedFaq === index ? 'expanded' : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="service-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>{service.cta.title}</h2>
                        <p>{service.cta.description}</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn-primary">{service.cta.primaryButton}</Link>
                            <Link to="/" className="btn-secondary">{service.cta.secondaryButton}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
