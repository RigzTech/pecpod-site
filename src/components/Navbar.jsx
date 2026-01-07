import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <div className="navbar-logo">
                        <span className="logo-text">PECPOD<span className="logo-highlight">STUDIO</span></span>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="navbar-menu">
                        <li><NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Work</NavLink></li>
                        <li className="nav-item-dropdown">
                            <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Services</NavLink>
                            <div className="dropdown-menu">
                                <NavLink to="/services/corporate-design" className="dropdown-link">Corporate Design</NavLink>
                                <NavLink to="/services/report-design" className="dropdown-link">Report Design</NavLink>
                                <NavLink to="/services/brand-identity" className="dropdown-link">Brand Identity</NavLink>
                                <NavLink to="/services/print-design" className="dropdown-link">Print Design</NavLink>
                                <NavLink to="/services/event-design" className="dropdown-link">Event Design</NavLink>
                            </div>
                        </li>
                        <li><NavLink to="/insights" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Insights</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink></li>
                    </ul>

                    {/* CTA Button */}
                    <button onClick={() => navigate('/contact')} className="btn btn-primary navbar-cta">
                        Get in Touch
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="mobile-menu-list">
                        <li><NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">Work</NavLink></li>
                        <li><NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">Services</NavLink></li>
                        <li><NavLink to="/insights" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">Insights</NavLink></li>
                        <li><NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">About</NavLink></li>
                        <li><NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">Contact</NavLink></li>
                    </ul>
                    <button onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }} className="btn btn-primary mobile-cta">
                        Get in Touch
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
