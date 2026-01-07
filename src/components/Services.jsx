import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);
    const location = useLocation();

    const processSteps = [
        {
            title: 'Research',
            description: 'We immerse ourselves in your brand ecosystem. By analyzing current guidelines and reviewing historical assets, we ensure every new creation honors your established identity while identifying opportunities for evolution. We map out the visual terrain before drawing a single line.',
            icon: '01'
        },
        {
            title: 'Design',
            description: 'We translate strategy into visuals. Developing layouts that project your specific ambience, we present curated options for your review. Through a structured iterative process, we refine these concepts until they perfectly align with your vision.',
            icon: '02'
        },
        {
            title: 'Content',
            description: 'Design and narrative work in unison. As we craft the visual experience, we collaborate closely with your team to integrate copy and imagery. This parallel development ensures that form and function—and image and word—reinforce each other seamlessly.',
            icon: '03'
        },
        {
            title: 'Testing',
            description: 'Precision before presentation. We rigorously review every pixel and paragraph against the project standards. This pre-delivery phase is our quality assurance guarantee, ensuring that what you see is polished, professional, and ready for the world.',
            icon: '04'
        },
        {
            title: 'Delivery',
            description: 'The final handover. Upon approval, we package all deliverables according to industry standards. We ensure you have everything needed to launch, print, or publish immediately, completing the project on time and on brief.',
            icon: '05'
        }
    ];

    const services = [
        {
            id: 'corporate-design',
            title: 'Corporate Design',
            shortDesc: 'Establishing visual authority for organizations through cohesive, legacy-building design systems.',
            fullDesc: 'A strong corporate identity is the bedrock of organizational trust. We specialize in crafting distinguished visual systems for Non-Profits and Corporations that command respect. From the logo to the letterhead, we ensure every asset reflects your mission’s gravity and your values’ clarity.',
            features: ['Visual Authority', 'Stationery Systems', 'Brand Architecture', 'Corporate Guidelines'],
            details: [
                'Strategic logo development',
                'Comprehensive stationery suites',
                'Visual identity systems',
                'Corporate branding governance',
                'Detailed brand guidelines'
            ],
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
            imageClass: 'service-img-1'
        },
        {
            id: 'report-design',
            title: 'Publications - Report Design',
            shortDesc: 'Transforming complex data into compelling narratives through editorial excellence and precision layout.',
            fullDesc: 'Your annual reports and strategic plans are more than documents; they are testaments to your impact. We turn dense information into accessible, visually engaging publications. Our editorial design ensures your achievements are not just recorded, but celebrated and understood.',
            features: ['Annual Reports', 'Strategic Plans', 'Editorial Layout', 'Data Visualization'],
            details: [
                'High-impact annual reports',
                'Clear strategic plan layouts',
                'Infographic data visualization',
                'Professional editorial design',
                'Print & digital ready formatting'
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            imageClass: 'service-img-3'
        },
        {
            id: 'brand-identity',
            title: 'Strategy - Brand Identity Design',
            shortDesc: 'Forging unique brand characters that blend emotion, consistency, and purpose to drive loyalty.',
            fullDesc: 'True branding is about soul, not just surface. We fuse strategy with aesthetics to build brand identities that resonate on an emotional level. By defining your purpose and visualizing your promise, we create brands that employees rally behind and customers remain loyal to.',
            features: ['Brand Strategy', 'Visual Systems', 'Tone of Voice', 'Emotional Resonance'],
            details: [
                'Brand positioning statements',
                'Comprehensive strategy',
                'Curated color palettes',
                'Visual diction and tone',
                'Memorable tagline development'
            ],
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
            imageClass: 'service-img-2'
        },
        {
            id: 'print-design',
            title: 'Packaging and Printing - Print Design',
            shortDesc: 'Tactile visual communications designed for the physical world, optimized for sustainability and impact.',
            fullDesc: 'In a digital age, print remains the premium touchpoint. We are masters of the physical medium, creating packaging and marketing collateral that invites touch. Our sustainable production processes ensure your physical presence is as responsible as it is beautiful.',
            features: ['Premium Packaging', 'Marketing Kits', 'Wayfinding', 'Tactile Collateral'],
            details: [
                'Bespoke packaging design',
                'High-end marketing collateral',
                'Environmental signage',
                'Corporate stationery',
                'Production management'
            ],
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
            imageClass: 'service-img-5'
        },
        {
            id: 'event-design',
            title: 'Event Design Services',
            shortDesc: 'Immersive spatial experiences from exhibition stands to large-format visual domination.',
            fullDesc: 'Your brand, magnified. We turn physical spaces into immersive brand experiences. Whether it is a custom-built exhibition stand or a city-block-sized banner, we design for scale and impact. We help you channel your inner showman to captivate audiences in the real world.',
            features: ['Exhibition Stands', 'Large Format', 'Spatial Branding', 'Event Strategy'],
            details: [
                'Custom exhibition stands',
                'Large format printing',
                'Complete event branding',
                'Directional signage systems',
                'Promotional displays'
            ],
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
            imageClass: 'service-img-4'
        }
    ];

    const faqs = [
        {
            question: 'What is your design process?',
            answer: 'Our design process follows three key phases: Strategy (research and planning), Identity (creative development), and Roll-out (execution and delivery). We work closely with you at every stage to ensure the final product exceeds your expectations.'
        },
        {
            question: 'How long does a typical project take?',
            answer: 'Project timelines vary based on scope and complexity. A brand identity project typically takes 4-6 weeks, while website development can range from 6-12 weeks. We provide detailed timelines during the initial consultation.'
        },
        {
            question: 'Do you work with international clients?',
            answer: 'Yes! We work with clients globally. Our remote collaboration tools and processes ensure seamless communication regardless of location. We\'ve successfully delivered projects for clients across multiple continents.'
        },
        {
            question: 'What industries do you specialize in?',
            answer: 'We specialize in serving non-profits, NGOs, and purpose-driven businesses. Our experience spans healthcare, education, environmental conservation, social justice, and international development sectors.'
        },
        {
            question: 'Can you help with ongoing support after project completion?',
            answer: 'Absolutely! We offer maintenance packages and ongoing support for all our services. Whether you need website updates, brand guideline consultations, or additional design work, we\'re here to support your continued success.'
        }
    ];



    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    // Handle Deep Linking - Scroll only
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    }, [location.hash]);

    return (
        <section className="services-page-content">
            <div className="container">
                {/* Hero Section */}
                <div className="services-hero">
                    <div className="services-hero-text">
                        <h1 className="services-main-title">
                            Crafting <span className="text-gold">quality design</span>
                        </h1>
                        <p className="services-hero-lead">
                            We combine strategy, creativity, and technology to build brands that matter.
                            Start a project with us today.
                        </p>
                        <Link to="/contact" className="btn-primary">Start a project</Link>
                    </div>
                    <div className="services-hero-visual">
                        {/* Abstract visual representation */}
                        <div className="visual-circle"></div>
                        <div className="visual-square"></div>
                    </div>
                </div>

                {/* Process Section */}
                <section className="process-section">
                    <h2 className="section-title-center">Our Approach</h2>
                    <div className="process-timeline">
                        {processSteps.map((step, index) => (
                            <div key={index} className="process-step-item">
                                <div className="process-step-number">{step.icon}</div>
                                <div className="process-step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Detailed Services List - Original What We Do Style */}
                <div className="services-list">
                    <h2 className="section-title-center">What We Do</h2>
                    {services.map((service, index) => (
                        <div key={index} id={service.id} className="service-accordion-wrapper">
                            <div className={`service-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
                                <div className="service-content">
                                    <h2 className="service-heading">{service.title}</h2>
                                    <p className="service-text">{service.shortDesc}</p>
                                    <div className="service-tags">
                                        {service.features.map((feature, idx) => (
                                            <span key={idx} className="service-tag">{feature}</span>
                                        ))}
                                    </div>
                                    <Link
                                        to={`/services/${service.id}`}
                                        className="accordion-toggle link-button"
                                    >
                                        Learn more
                                        <span className="accordion-icon arrow-right">
                                            →
                                        </span>
                                    </Link>
                                </div>
                                <div className="service-visual">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="service-image"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <h2 className="section-title-center">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
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

                {/* Footer CTA */}
                <div className="services-cta text-center">
                    <h3>Ready to start?</h3>
                    <p className="cta-subtitle">Let's create something amazing together</p>
                    <Link to="/contact" className="btn-text-arrow">Get in touch <span className="arrow">→</span></Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
