import { useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const contentRef = useRef(null);

    // 1. Find the project
    const project = portfolioData.find(p => p.id === projectId);

    // 2. Find adjacent projects for navigation
    const currentIndex = portfolioData.findIndex(p => p.id === projectId);
    const prevProject = currentIndex > 0 ? portfolioData[currentIndex - 1] : null;
    const nextProject = currentIndex < portfolioData.length - 1 ? portfolioData[currentIndex + 1] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    // 3. Dynamic Content Observer
    useEffect(() => {
        if (!contentRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Sort entries by their vertical position to ensure top-to-bottom stagger
                const sortedEntries = entries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                sortedEntries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // Add staggered delay for elements appearing together
                        setTimeout(() => {
                            entry.target.classList.add('reveal-active');
                        }, index * 150); // 150ms delay between each element in the batch
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before bottom
            }
        );

        // Select all relevant text and media elements strictly within the content
        // Select all relevant text and media elements strictly within the content
        const elements = contentRef.current.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, img, div.pull-quote, blockquote, .magazine-grid-img, .magazine-image-full');

        elements.forEach((el) => {
            el.classList.add('reveal-element');
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, [project]); // Re-run when project changes

    if (!project) {
        return (
            <div className="container" style={{ paddingTop: '150px', textAlign: 'center', color: '#fff' }}>
                <h2>Project Not Found</h2>
                <button onClick={() => navigate('/')} className="btn btn-primary" style={{ marginTop: '20px' }}>
                    Back to Work
                </button>
            </div>
        );
    }

    // Default content if none exists in data
    // This allows the page to work gracefully even before the user populates all text
    const defaultContent = `
        <div class="magazine-intro">
            <p>This project represents a significant milestone in our design journey. We approached the challenge with a focus on clarity, impact, and aesthetic precision. By deconstructing the core message, we were able to rebuild it into a visual narrative that resonates with the target audience.</p>
            <p>The solution required a delicate balance between form and function. We utilized a strategic color palette and modern typography to guide the user's eye and ensure that the most critical information was always accessible.</p>
        </div>

        <div class="magazine-section">
            <h3>The Challenge</h3>
            <p>Every project begins with a problem. In this case, the objective was to transform complex data into a compelling story. The client needed a way to communicate their impact without overwhelming their stakeholders with dense technical jargon.</p>
            <p>Our research phase revealed that the target audience responded best to visual metaphors and clean, digestible layouts. This insight drove our design direction from day one.</p>
        </div>

        <div class="pull-quote">
            "Design is not just what it looks like and feels like. Design is how it works."
        </div>

        <div class="magazine-section">
            <h3>The Solution</h3>
            <p>We developed a design system that leveraged high-contrast imagery and bold typography. This created a sense of urgency and importance, while the ample whitespace allowed the content to breathe.</p>
            <p>The final deliverable was not just a document, but an experience. It empowered the client to present their findings with confidence and clarity, ultimately leading to a successful outcome for their initiatives.</p>
        </div>
    `;

    // Helper to extract YouTube ID
    const getYoutubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = project?.isVideo ? getYoutubeId(project.document) : null;

    return (
        <div className="project-detail-page">
            {/* Hero Header (Video or Image) */}
            {project.isVideo && videoId ? (
                <div className="video-hero-container">
                    <div className="video-responsive">
                        <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                </div>
            ) : (
                <div className="project-hero">
                    <img src={project.image} alt={project.title} className="project-hero-image" />
                    <div className="project-hero-overlay">
                        <div className="project-hero-content">
                            <span className="project-category-label">{project.category}</span>
                            <h1 className="project-title-large">{project.title}</h1>
                        </div>
                    </div>
                </div>
            )}

            {/* Project Metadata Bar */}
            {project.isVideo && (
                <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%', marginBottom: '2rem' }}>
                    <span className="project-category-label" style={{ color: '#000', borderBottomColor: '#ccc' }}>{project.category}</span>
                    <h1 className="project-title-large" style={{ fontSize: '4rem' }}>{project.title}</h1>
                </div>
            )}

            <div className={`project-meta-grid ${project.isVideo ? 'video-meta-grid' : ''}`}>
                <div className="meta-item">
                    <h4>Client</h4>
                    <p>{project.client || 'Confidential'}</p>
                </div>
                <div className="meta-item">
                    <h4>Date</h4>
                    <p>{project.date || '2024'}</p>
                </div>
                <div className="meta-item">
                    <h4>Role</h4>
                    <p>{project.role || 'Design & Strategy'}</p>
                </div>
                <div className="meta-item">
                    <h4>Service</h4>
                    <p>{project.category}</p>
                </div>
            </div>

            {/* Magazine Content */}
            <div className="project-content-container">
                <div
                    ref={contentRef}
                    className="magazine-layout"
                    dangerouslySetInnerHTML={{ __html: project.content || defaultContent }}
                />
            </div>

            {/* Navigation Footer */}
            <div className="project-navigation">
                {prevProject ? (
                    <Link to={`/work/${prevProject.id}`} className="nav-link-group">
                        <span className="nav-label">Previous Project</span>
                        <span className="nav-title">{prevProject.title}</span>
                    </Link>
                ) : (
                    <div style={{ width: '200px' }}></div>
                )}

                <button onClick={() => navigate('/')} className="back-btn" aria-label="Back to Grid">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                </button>

                {nextProject ? (
                    <Link to={`/work/${nextProject.id}`} className="nav-link-group next">
                        <span className="nav-label">Next Project</span>
                        <span className="nav-title">{nextProject.title}</span>
                    </Link>
                ) : (
                    <div style={{ width: '200px' }}></div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;
