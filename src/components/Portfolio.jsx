import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';
import './Portfolio.css';

const Portfolio = ({ activeFilter }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(API_ENDPOINTS.projects);
                setProjects(res.data);
                setLoading(false);
            } catch (err) {
                console.error('Failed to fetch projects', err);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // Use fetched data
    const projectsWithSizes = useMemo(() => {
        if (loading || projects.length === 0) return [];

        // Standard Fisher-Yates Shuffle for unbiased randomness
        const shuffled = [...projects];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled.map((project, index) => {
            const r = Math.random();
            let size = 'small';

            // Custom size logic from DB or randomize if not preserved
            // For now, keep the random logic derived from index position in shuffled list

            // Define a "Middle Zone" (e.g., skip first 4 and last 4)
            const isMiddle = index > 3 && index < shuffled.length - 4;

            if (isMiddle) {
                // In the middle, allow some vertical/large items
                if (r < 0.15) size = 'large';       // 15% Large (2x2) -> "Bigger"
                else if (r < 0.30) size = 'medium'; // 15% Tall (1x2)  -> "Vertically"
                else if (r < 0.6) size = 'wide';    // 30% Wide
                else size = 'small';                // 40% Small
            } else {
                // Edges (Start/End): Keep simple to ensure good packing/no gaps
                if (r < 0.4) size = 'wide';
                else size = 'small';
            }

            return { ...project, size };
        });
    }, [projects, loading]);

    const filteredProjects = activeFilter === 'ALL'
        ? projectsWithSizes
        : projectsWithSizes.filter(project => project.category === activeFilter);

    const navigate = useNavigate();

    const handleProjectClick = (project) => {
        // Navigate to the internal detail page using custom id (slug)
        navigate(`/work/${project.id}`);
    };

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '50px' }}>Loading Projects...</div>;
    }

    return (
        <section id="portfolio" className="portfolio section">
            <div className="container">
                {/* Masonry Grid */}
                <div className="masonry-grid">
                    {filteredProjects.map((project) => (
                        <div key={project._id} className={`masonry-item ${project.size}`}>
                            <div className="project-card group">
                                <div className="project-image-wrapper" onClick={() => handleProjectClick(project)} style={{ cursor: 'pointer' }}>
                                    {/* Main Content Image */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-img"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://via.placeholder.com/400x300?text=PecPod+Design';
                                        }}
                                    />

                                    {/* Play Button Overlay for Videos */}
                                    {project.isVideo && (
                                        <div className="play-button-overlay">
                                            <svg viewBox="0 0 24 24" width="48" height="48" fill="white">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    )}
                                    <div className="project-overlay">
                                        <div className="project-content-overlay">
                                            <span className="project-category-overlay">{project.category}</span>
                                            <h3 className="project-title-overlay">{project.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
