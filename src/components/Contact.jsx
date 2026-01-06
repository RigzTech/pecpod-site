import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                {/* Hero Section */}
                <div className="contact-hero">
                    <h1 className="contact-title">
                        Let's Create Something <span className="text-gold">Exceptional</span>
                    </h1>
                    <p className="contact-subtitle">
                        Whether you have a specific project in mind or need comprehensive consultancy,
                        PecPod is ready to walk with you as your business partner.
                    </p>
                </div>


                <div className="contact-wrapper">
                    {/* Contact Information */}
                    <div className="contact-info-section">
                        <h2 className="info-heading">Get in Touch</h2>
                        <p className="info-text">
                            We'd love to hear from you. Choose the best way to reach us.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon-wrapper">
                                    <span className="contact-icon">📍</span>
                                </div>
                                <div className="contact-item-content">
                                    <h4>Visit Us</h4>
                                    <p>P.O.BOX 51505-00100</p>
                                    <p>Nairobi, Kenya</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon-wrapper">
                                    <span className="contact-icon">✉️</span>
                                </div>
                                <div className="contact-item-content">
                                    <h4>Email Us</h4>
                                    <p><a href="mailto:hello@pecpod.com">hello@pecpod.com</a></p>
                                    <p><a href="mailto:info@pecpod.com">info@pecpod.com</a></p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon-wrapper">
                                    <span className="contact-icon">📞</span>
                                </div>
                                <div className="contact-item-content">
                                    <h4>Call Us</h4>
                                    <p><a href="tel:+254123456789">+254 123 456 789</a></p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="social-section">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                <a href="#" className="social-link" aria-label="LinkedIn">
                                    <span>in</span>
                                </a>
                                <a href="#" className="social-link" aria-label="Instagram">
                                    <span>ig</span>
                                </a>
                                <a href="#" className="social-link" aria-label="Twitter">
                                    <span>tw</span>
                                </a>
                                <a href="#" className="social-link" aria-label="Behance">
                                    <span>be</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3 className="form-heading">Send us a Message</h3>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Service Interest</label>
                                <select
                                    id="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a service...</option>
                                    <option value="digitalisation">Digitalisation</option>
                                    <option value="brand-identity">Brand Identity Design</option>
                                    <option value="report-design">Report Design</option>
                                    <option value="messaging">Messaging</option>
                                    <option value="print-design">Print Design</option>
                                    <option value="consultation">General Consultation</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message *</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project, goals, and how we can help..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Message
                                <span className="btn-arrow">→</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Additional CTA */}
                <div className="contact-cta">
                    <h3>Not sure where to start?</h3>
                    <p>Schedule a free 30-minute consultation to discuss your project</p>
                    <button className="cta-btn">Book a Call</button>
                </div>

                {/* Map Section */}
                <div className="contact-map-section">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19034106447!2d36.70730744999999!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1704463200000!5m2!1sen!2s"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="PecPod Location - Nairobi, Kenya"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
