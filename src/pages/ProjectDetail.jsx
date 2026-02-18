import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const contentRef = useRef(null);

    const [project, setProject] = useState(null);
    const [prevProject, setPrevProject] = useState(null);
    const [nextProject, setNextProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProjectData();
    }, [projectId]);

    const fetchProjectData = async () => {
        setLoading(true);
        try {
            // Fetch all projects to determine next/prev
            // Optimization: Could create a specific API endpoint for this
            const res = await axios.get(API_ENDPOINTS.projects);
            const projects = res.data;

            const current = projects.find(p => p.id === projectId);
            setProject(current);

            if (current) {
                const currentIndex = projects.findIndex(p => p.id === projectId);
                setPrevProject(currentIndex > 0 ? projects[currentIndex - 1] : null);
                setNextProject(currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // 3. Dynamic Content Observer
    useEffect(() => {
        if (!contentRef.current || !project) return;

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
        const elements = contentRef.current.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, img, div.pull-quote, blockquote, .magazine-grid-img, .magazine-image-full');

        elements.forEach((el) => {
            el.classList.add('reveal-element');
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, [project]); // Re-run when project changes

    if (loading) {
        return <div style={{ paddingTop: '150px', textAlign: 'center', color: '#fff' }}>Loading Project...</div>;
    }

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
    const defaultContent = `
        <div class="magazine-intro">
            <p>Project details are currently being updated. Please check back soon for the full case study.</p>
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

            {/* Project Intro / Description - Smart Magazine Formatting */}
            {project.description && (
                <div className="project-intro-container" style={{ maxWidth: '800px', margin: '0 auto 3rem', padding: '0 2rem' }}>
                    {(() => {
                        // Split by newlines and remove empty strings
                        const lines = project.description.split('\n').filter(p => p.trim() !== '');
                        let firstParagraphFound = false;

                        return lines.map((line, index) => {
                            const trimmed = line.trim();
                            // Heuristic: If line is short and doesn't end in punctuation (mostly), treat as heading
                            // Adjust threshold as needed. 60 chars is a reasonable "subhead" length.
                            const isHeading = trimmed.length < 60 && !/[.!?]$/.test(trimmed);

                            if (isHeading) {
                                return (
                                    <h3 key={index} className="project-magazine-subhead">
                                        {trimmed}
                                    </h3>
                                );
                            } else {
                                const className = !firstParagraphFound
                                    ? "project-description-paragraph first-paragraph-dropcap"
                                    : "project-description-paragraph";

                                firstParagraphFound = true; // Mark that we've processed the first real paragraph

                                return (
                                    <p key={index} className={className}>
                                        {trimmed}
                                    </p>
                                );
                            }
                        });
                    })()}
                </div>
            )}

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
