import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);
    const location = useLocation();

    const processSteps = [
        {
            title: 'Strategy',
            description: 'We build the foundation. Research, insights, positioning, and brand architecture.',
            icon: '01'
        },
        {
            title: 'Identity',
            description: 'We create the visual expression. Logo design, visual identity systems, and brand guidelines.',
            icon: '02'
        },
        {
            title: 'Roll-out',
            description: 'We bring it to life. Execution across print, digital, packaging, and web platforms.',
            icon: '03'
        }
    ];

    const services = [
        {
            id: 'digitalisation',
            title: 'Digitalisation',
            shortDesc: 'We help you navigate the digital landscape with custom solutions that unleash new products and enhance your online presence.',
            fullDesc: 'Transform your business with cutting-edge digital solutions. We create responsive websites, web applications, and digital experiences that engage your audience and drive results. Our team combines technical expertise with creative vision to deliver solutions that are both beautiful and functional.',
            features: ['Web Design', 'Digital Strategy', 'Interactive Layouts', 'E-commerce Solutions'],
            details: [
                'Custom website development',
                'Progressive web applications',
                'Digital transformation consulting',
                'User experience optimization',
                'Mobile-first responsive design'
            ],
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
            imageClass: 'service-img-1'
        },
        {
            id: 'brand-identity',
            title: 'Brand Identity Design',
            shortDesc: 'Components of your company character that make it identifiable and unique with purpose, consistency, emotion, and loyalty.',
            fullDesc: 'Build a memorable brand that resonates with your audience. We craft comprehensive brand identities that tell your story, differentiate you from competitors, and create lasting emotional connections with your customers.',
            features: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Color Palette'],
            details: [
                'Logo and mark creation',
                'Brand guidelines development',
                'Typography systems',
                'Color palette selection',
                'Brand voice and messaging'
            ],
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
            imageClass: 'service-img-2'
        },
        {
            id: 'report-design',
            title: 'Report Design',
            shortDesc: 'Top-notch publications for Non-Profit Organizations ensuring effective communication through professional layout and design.',
            fullDesc: 'Create impactful reports that communicate your message clearly and professionally. We specialize in designing annual reports, strategic plans, and publications that engage readers and showcase your achievements.',
            features: ['Annual Reports', 'Strategic Plans', 'Book Layouts', 'Infographics'],
            details: [
                'Annual report design',
                'Strategic plan layouts',
                'Data visualization',
                'Editorial design',
                'Print-ready file preparation'
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
            imageClass: 'service-img-3'
        },
        {
            id: 'messaging',
            title: 'Messaging',
            shortDesc: 'We craft the right narrative for your brand, ensuring your message resonates with the right people through strategic communication.',
            fullDesc: 'Develop compelling narratives that connect with your audience. Our messaging services help you articulate your value proposition, define your brand voice, and create content that drives engagement and conversions.',
            features: ['Content Strategy', 'Brand Voice', 'Article Drafting', 'Copywriting'],
            details: [
                'Brand messaging framework',
                'Content strategy development',
                'Copywriting and editing',
                'Tone of voice guidelines',
                'Marketing communications'
            ],
            image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
            imageClass: 'service-img-4'
        },
        {
            id: 'print-design',
            title: 'Print Design',
            shortDesc: 'Sustainable processes producing visual communications and presentations for your targeted audience, purposely designed for printing.',
            fullDesc: 'Bring your brand to life in print. From business cards to large-format displays, we create print materials that make a lasting impression. Our designs are optimized for production while maintaining the highest quality standards.',
            features: ['Packaging', 'Marketing Kits', 'Signage', 'Collateral'],
            details: [
                'Packaging design',
                'Marketing collateral',
                'Signage and wayfinding',
                'Business stationery',
                'Print production management'
            ],
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
            imageClass: 'service-img-5'
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

                {/* Process / Approach Section */}
                <div className="process-section">
                    <h2 className="section-title-center">Our Approach</h2>
                    <div className="process-grid">
                        {processSteps.map((step, index) => (
                            <div key={index} className="process-card hover-lift">
                                <span className="process-number">{step.icon}</span>
                                <h3 className="process-title">{step.title}</h3>
                                <p className="process-desc">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Services List with Accordions */}
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
