import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaTwitter, FaBehance } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                {/* Main Footer Content */}
                <div className="footer-main">
                    {/* Column 1: Brand & Description */}
                    <div className="footer-brand">
                        <h3 className="footer-logo">PecPod<span className="text-gold">Studio</span></h3>
                        <p className="footer-tagline">Design Studio</p>
                        <p className="footer-description">
                            PecPod Studio deals with consultancy, graphic design, communications, and marketing agencies.
                        </p>

                        {/* Social Links */}
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="#" className="social-link" aria-label="Behance">
                                <FaBehance />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/insights">Insights</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services/corporate-design">Corporate Design</Link></li>
                            <li><Link to="/services/report-design">Publications - Report Design</Link></li>
                            <li><Link to="/services/brand-identity">Strategy - Brand Identity</Link></li>
                            <li><Link to="/services/print-design">Packaging & Print Design</Link></li>
                            <li><Link to="/services/event-design">Event Design Services</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Get in Touch</h4>
                        <div className="footer-contact-info">
                            <p className="contact-item">
                                <span className="contact-label">Location</span>
                                P.O.BOX 51505-00100<br />
                                Nairobi, Kenya
                            </p>
                            <p className="contact-item">
                                <span className="contact-label">Email</span>
                                <a href="mailto:hello@pecpod.com">hello@pecpod.com</a>
                            </p>
                            <p className="contact-item">
                                <span className="contact-label">Phone</span>
                                <a href="tel:+254123456789">+254 123 456 789</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} PecPod Design Studio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
