import { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const [expandedValue, setExpandedValue] = useState(null);
    const [expandedMember, setExpandedMember] = useState(null);

    const teamMembers = [
        {
            name: 'Brian Alili',
            role: 'Director / Founder',
            initials: 'BA',
            bio: 'Mr. Brian Alili has gained vast experience over the years and has been in the design industry for over 5 years. Having a Diploma in Graphic Design and pursuing a Bachelor\'s Degree in Communications from the University of Nairobi, he specializes in creating publications, drafting articles, strategic plans and posters. He also works for various non-profit organizations as a communications consultant.',
            expertise: ['Brand Strategy', 'Publications', 'Communications']
        },
        {
            name: 'Rodney Alubokho',
            role: 'Operations',
            initials: 'RA',
            bio: 'Rodney ensures smooth project execution and operational efficiency, coordinating between teams to deliver on time.',
            expertise: ['Project Management', 'Operations']
        },
        {
            name: 'Bruno Lumbasi',
            role: 'Graphic Designer',
            initials: 'BL',
            bio: 'Bruno specializes in creating visually compelling graphic designs and visual identities that resonate with audiences.',
            expertise: ['Graphic Design', 'Visual Identity']
        },
        {
            name: 'Alvin Steve',
            role: 'Illustrator',
            initials: 'AS',
            bio: 'Alvin brings creative concepts to life through unique illustrations and visual storytelling.',
            expertise: ['Illustration', 'Creative Art']
        }
    ];

    const values = [
        {
            title: 'Creativity',
            shortDesc: 'Innovation in every design.',
            fullDesc: 'We believe in pushing boundaries to create unique solutions for every client, ensuring your brand stands out.',
            principles: []
        },
        {
            title: 'Commitment',
            shortDesc: 'Dedicated to your success.',
            fullDesc: 'We are committed to our clients, ensuring high standards and walking with you as a business partner.',
            principles: []
        },
        {
            title: 'Industry and Integrity',
            shortDesc: 'Professionalism at our core.',
            fullDesc: 'We uphold the highest levels of professionalism and integrity in all our dealings, depicted by our repeat clients.',
            principles: []
        },
        {
            title: 'Customer Appreciation',
            shortDesc: ' valuing every relationship.',
            fullDesc: 'We value our clients and strive to exceed expectations, delivering quality products on time.',
            principles: []
        }
    ];

    const toggleValue = (index) => {
        setExpandedValue(expandedValue === index ? null : index);
    };

    const toggleMember = (index) => {
        setExpandedMember(expandedMember === index ? null : index);
    };

    return (
        <section id="about" className="about section">
            {/* Master Hero Section - Full Width */}
            <div className="about-master-hero">
                <div className="master-hero-overlay"></div>
                <div className="container">
                    <div className="master-hero-content">
                        <span className="master-label animate-fade-in">PecPod Design Studio</span>
                        <h1 className="master-title animate-fade-in-up">
                            <span className="hero-accent">Design with</span>
                            <span className="text-outline big-text">Purpose</span>
                            <span className="hero-accent">Driven by</span>
                            <span className="text-gold big-text">Strategy</span>
                        </h1>
                        <p className="master-description animate-fade-in-up">
                            We are not in the business to just provide graphic design services but also walk with you as your 'business partner' until the completion of any project.
                        </p>
                    </div>
                </div>

                <div className="master-scroll-indicator">
                    <div className="scroll-line"></div>
                </div>
            </div>

            <div className="container relative z-10">
                {/* Intro CTA */}
                <div className="intro-cta-container">
                    <Link to="/" className="premium-hero-btn dark-mode-btn">
                        <span className="btn-text">View Selected Works</span>
                        <span className="btn-line"></span>
                        <span className="btn-arrow">→</span>
                    </Link>
                </div>

                {/* Secondary Hero / Intro */}
                <div className="about-intro">
                    <div className="about-hero-grid">
                        <div className="hero-text-content">
                            <span className="hero-label animate-fade-in">Why PecPod?</span>
                            <h2 className="hero-title animate-fade-in-up">
                                Creative <br />
                                <span className="text-stroke">Consultancy</span>
                            </h2>
                            <p className="hero-description animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                In today’s crowded market, a strong team made up of highly innovative thinkers, top-of-the-game designers and aggressive and enthusiastic marketers cuts through the industry to create Pecpod Atelier.
                                <br /><br />
                                The ideology behind this is that we see each company as a brand that needs to create a lasting impression on the consumers and stakeholders through its communications.
                            </p>
                            <div className="hero-stats animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <div className="stat-item">
                                    <span className="stat-number">5+</span>
                                    <span className="stat-label">Years Exp.</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Timely Delivery</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">High</span>
                                    <span className="stat-label">Quality Standards</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero-visuals">
                            <div className="floating-card card-1 glass">
                                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" alt="Consultancy" />
                            </div>
                            <div className="floating-card card-2 glass">
                                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" alt="Design" />
                            </div>
                            <div className="decorative-circle"></div>
                        </div>
                    </div>
                </div>

                {/* Vision & Mission Section */}
                <div className="our-story-section">
                    <div className="story-content">
                        <span className="section-label">Our Purpose</span>
                        <h3>Our Vision & Mission</h3>
                        <div className="vm-grid">
                            <div className="vm-card">
                                <h4>Vision</h4>
                                <p>To be the admirable company of choice in matters of design that deliver products and services of the highest quality using the latest technology in the market to ensure our clients can achieve their target.</p>
                            </div>
                            <div className="vm-card">
                                <h4>Mission Statement</h4>
                                <p>To provide services at competitive market prices in Graphic design, Illustration, and Messaging.</p>
                            </div>
                        </div>
                        <blockquote className="quote">
                            "We offer a personalized service that extends on the completion of any task. Professionalism is what we pride ourselves in."
                        </blockquote>
                    </div>
                </div>

                {/* Value Proposition */}
                <div className="value-prop-section">
                    <h3>Value Proposition</h3>
                    <p>We believe great work starts with strategic thinkers who can combine the soft touch of developing and delivering the right visuals to the right people with the strength of today’s technology and trends. That’s why we are your best choice — to ensure that the smart people you need are on your side. From strategy and implementation to visualization and creation, your design needs will be in the best hands.</p>
                </div>

                {/* Core Values */}
                <div className="values-section">
                    <div className="values-container-split">
                        <div className="values-content-side">
                            <h3 className="subsection-title-left">Core Values</h3>
                            <div className="values-list-vertical">
                                {values.map((value, index) => (
                                    <div key={index} className="value-item-accordion-clean">
                                        <div className="value-header-clean" onClick={() => toggleValue(index)}>
                                            <span className="value-number">0{index + 1}</span>
                                            <div className="value-header-text">
                                                <h4 className="value-title-clean">{value.title}</h4>
                                                <p className="value-desc-clean">{value.shortDesc}</p>
                                            </div>
                                            <span className={`toggle-icon-clean ${expandedValue === index ? 'expanded' : ''}`}>+</span>
                                        </div>
                                        <div className={`value-content ${expandedValue === index ? 'expanded' : ''}`}>
                                            <div className="value-content-inner-clean">
                                                <p className="value-full-desc">{value.fullDesc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="values-image-side">
                            <div className="values-image-wrapper creative-composition">
                                <div className="comp-layer base-layer">
                                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Strategic Design" />
                                    <div className="layer-overlay"></div>
                                </div>
                                <div className="comp-layer deco-circle"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="team-section">
                    <h3 className="subsection-title text-center">Our Executive Team</h3>
                    <div className="team-intro text-center">
                        <p>We are a dynamic team made of creative specialists with expertise that extends through more than just creating compelling designs; we specialize in communication practices with a special focus on print, design and marketing solutions.</p>
                    </div>

                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-card-expandable">
                                <div className="team-card-header">
                                    <div className="team-avatar">
                                        <span className="team-initials">{member.initials}</span>
                                    </div>
                                    <div className="team-info">
                                        <h4 className="team-name">{member.name}</h4>
                                        <p className="team-role">{member.role}</p>
                                    </div>
                                </div>
                                <button
                                    className="team-toggle"
                                    onClick={() => toggleMember(index)}
                                    aria-expanded={expandedMember === index}
                                >
                                    {expandedMember === index ? 'Show less' : 'Read bio'}
                                    <span className={`toggle-icon ${expandedMember === index ? 'expanded' : ''}`}>↓</span>
                                </button>
                                <div className={`team-bio ${expandedMember === index ? 'expanded' : ''}`}>
                                    <p>{member.bio}</p>
                                    <div className="team-expertise">
                                        <strong>Expertise:</strong>
                                        <div className="expertise-tags">
                                            {member.expertise.map((skill, idx) => (
                                                <span key={idx} className="expertise-tag">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="about-cta text-center">
                    <h3>Ready to create something amazing together?</h3>
                    <p>Let's discuss your next project and see how we can help bring your vision to life.</p>
                    <button className="btn-primary">Get in Touch <span className="arrow">→</span></button>
                </div>
            </div>
        </section>
    );
};

export default About;
