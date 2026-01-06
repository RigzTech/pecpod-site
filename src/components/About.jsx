import { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const [expandedValue, setExpandedValue] = useState(null);
    const [expandedMember, setExpandedMember] = useState(null);

    const teamMembers = [
        {
            name: 'Brian Alili',
            role: 'Founder & Creative Director',
            initials: 'BA',
            bio: 'Brian founded PecPod with a vision to create meaningful design that drives impact. With over 10 years of experience in brand strategy and visual design, he leads our creative direction and ensures every project exceeds client expectations.',
            expertise: ['Brand Strategy', 'Creative Direction', 'Client Relations']
        },
        {
            name: 'Rodney Alubokho',
            role: 'Head of Operations',
            initials: 'RA',
            bio: 'Rodney ensures our projects run smoothly from concept to delivery. His expertise in project management and operational excellence keeps our team efficient and our clients happy.',
            expertise: ['Project Management', 'Operations', 'Quality Assurance']
        },
        {
            name: 'Bruno Lumbasi',
            role: 'Senior Graphic Designer',
            initials: 'BL',
            bio: 'Bruno brings creative concepts to life with exceptional attention to detail. His expertise in visual design and typography creates stunning work that resonates with audiences.',
            expertise: ['Graphic Design', 'Typography', 'Visual Identity']
        },
        {
            name: 'Alvin Steve',
            role: 'Lead Illustrator',
            initials: 'AS',
            bio: 'Alvin creates custom illustrations and visual elements that make our designs unique. His artistic vision adds a distinctive touch to every project.',
            expertise: ['Illustration', 'Digital Art', 'Visual Storytelling']
        }
    ];

    const values = [
        {
            title: '01 Creative Excellence',
            shortDesc: 'Pushing creative boundaries for lasting impact.',
            fullDesc: 'We believe in pushing the boundaries of creativity to deliver work that not only looks beautiful but creates lasting impact. Every project is an opportunity to innovate and exceed expectations.',
            principles: [
                'Innovative thinking in every project',
                'Attention to detail and craftsmanship',
                'Continuous learning and improvement',
                'Setting new standards in design'
            ]
        },
        {
            title: '02 Strategic Thinking',
            shortDesc: 'Strategy-backed decisions to meet business goals.',
            fullDesc: 'Great design starts with great strategy. We combine creative thinking with business acumen to ensure every design decision supports your goals and drives measurable results.',
            principles: [
                'Research-driven design decisions',
                'Alignment with business objectives',
                'Data-informed creative choices',
                'Long-term brand building'
            ]
        },
        {
            title: '03 Client Partnership',
            shortDesc: 'Working closely as partners to realize visions.',
            fullDesc: 'We see ourselves as an extension of your team. Through close collaboration and open communication, we work together to bring your vision to life and achieve shared success.',
            principles: [
                'Transparent communication',
                'Collaborative approach',
                'Responsive to feedback',
                'Committed to your success'
            ]
        },
        {
            title: '04 Innovation First',
            shortDesc: 'Staying ahead of trends with cutting-edge solutions.',
            fullDesc: 'The design landscape is constantly evolving, and so are we. We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions that keep you competitive.',
            principles: [
                'Embracing new technologies',
                'Trend awareness and adaptation',
                'Creative problem-solving',
                'Future-focused thinking'
            ]
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
                            <span className="hero-accent">Where</span>
                            <span className="text-outline big-text">Creativity</span>
                            <span className="hero-accent">Meets</span>
                            <span className="text-gold big-text">Strategy</span>
                        </h1>
                        <p className="master-description animate-fade-in-up">
                            We are the architects of visual culture, crafting brands that
                            stand the test of time and digital transformation.
                        </p>
                    </div>
                </div>


                <div className="master-scroll-indicator">
                    <div className="scroll-line"></div>
                </div>
            </div>

            <div className="container relative z-10">
                {/* Intro CTA - Transition Point */}
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
                            <span className="hero-label animate-fade-in">Who We Are</span>
                            <h2 className="hero-title animate-fade-in-up">
                                Visual <br />
                                <span className="text-stroke">Intelligence</span>
                            </h2>
                            <p className="hero-description animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                We are a multidisciplinary design studio bridging the gap between
                                <span className="highlight"> strategic thinking</span> and
                                <span className="highlight"> creative excellence</span>.
                            </p>
                            <div className="hero-stats animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <div className="stat-item">
                                    <span className="stat-number">10+</span>
                                    <span className="stat-label">Years Exp.</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Projects</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Commitment</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero-visuals">
                            <div className="floating-card card-1 glass">
                                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" alt="Digital Design" />
                            </div>
                            <div className="floating-card card-2 glass">
                                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" alt="Brand Identity" />
                            </div>
                            <div className="floating-card card-3 glass">
                                <img src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80" alt="Print Design" />
                            </div>
                            <div className="decorative-circle"></div>
                        </div>
                    </div>
                </div>

                {/* Our Story */}
                <div className="our-story-section">
                    <div className="story-content">
                        <span className="section-label">Our Story</span>
                        <h3>Design that moves people forward</h3>
                        <p>
                            PecPod was founded by Brian Alili with a vision to bridge the gap between creativity and strategy.
                            Together with Rodney Alubokho, they've built a studio that delivers exceptional design for organizations making real impact.
                            Our journey has been marked by a relentless pursuit of excellence and a commitment to delivering outstanding results.
                            We specialize in serving non-profits, NGOs, and purpose-driven businesses who need powerful visual communications.
                        </p>
                        <blockquote className="quote">
                            "Design is not just what it looks like. Design is how it works."
                            <footer>- Steve Jobs</footer>
                        </blockquote>
                    </div>
                </div>

                {/* Core Values with Accordions */}
                <div className="values-section">
                    <div className="values-container-split">
                        <div className="values-content-side">
                            <h3 className="subsection-title-left">What We Stand For</h3>
                            <div className="values-list-vertical">
                                {values.map((value, index) => (
                                    <div key={index} className="value-item-accordion-clean">
                                        <div
                                            className="value-header-clean"
                                            onClick={() => toggleValue(index)}
                                        >
                                            <span className="value-number">{value.title.split(' ')[0]}</span>
                                            <div className="value-header-text">
                                                <h4 className="value-title-clean">{value.title.substring(3)}</h4>
                                                <p className="value-desc-clean">{value.shortDesc}</p>
                                            </div>
                                            <span className={`toggle-icon-clean ${expandedValue === index ? 'expanded' : ''}`}>
                                                +
                                            </span>
                                        </div>
                                        <div className={`value-content ${expandedValue === index ? 'expanded' : ''}`}>
                                            <div className="value-content-inner-clean">
                                                <p className="value-full-desc">{value.fullDesc}</p>
                                                <ul className="value-principles">
                                                    {value.principles.map((principle, idx) => (
                                                        <li key={idx}>{principle}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="values-image-side">
                            <div className="values-image-wrapper creative-composition">
                                {/* Base Layer - Darkened & Textured */}
                                <div className="comp-layer base-layer">
                                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Strategic Design" />
                                    <div className="layer-overlay"></div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="comp-layer deco-circle"></div>
                                <div className="comp-layer deco-lines"></div>

                                {/* Floating Accent Image */}
                                <div className="comp-layer float-image glass">
                                    <img src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80" alt="Detail" />
                                </div>

                                {/* Content Card */}
                                <div className="values-overlay-card glass-dark animate-fade-in-up">
                                    <span className="card-label">Core Philosophy</span>
                                    <strong className="card-title">Design with Purpose</strong>
                                    <div className="card-indicator">
                                        <span className="active"></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section with Expandable Bios */}
                <div className="team-section">
                    <h3 className="subsection-title text-center">Meet Our Team</h3>
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
                                    <span className={`toggle-icon ${expandedMember === index ? 'expanded' : ''}`}>
                                        ↓
                                    </span>
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
