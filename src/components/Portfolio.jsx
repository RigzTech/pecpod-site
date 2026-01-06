import { useState, useEffect, useMemo } from 'react';
import './Portfolio.css';

import { portfolioData } from '../data/portfolioData';

const Portfolio = ({ activeFilter }) => {
    // Use imported data
    const projectsWithSizes = useMemo(() => {
        // Standard Fisher-Yates Shuffle for unbiased randomness
        const shuffled = [...portfolioData];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        return shuffled.map((project, index) => {
            const r = Math.random();
            let size = 'small';

            // Targeted Randomization:
            // "One or two grids in the middle, vertically and bigger"

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
    }, []);

    const filteredProjects = activeFilter === 'ALL'
        ? projectsWithSizes
        : projectsWithSizes.filter(project => project.category === activeFilter);

    const handleProjectClick = (documentUrl) => {
        if (documentUrl && documentUrl !== '#') {
            window.open(documentUrl, '_blank');
        }
    };

    return (
        <section id="portfolio" className="portfolio section">
            <div className="container">
                {/* Masonry Grid */}
                <div className="masonry-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className={`masonry-item ${project.size}`}>
                            <div className="project-card group">
                                <div className="project-image-wrapper" onClick={() => handleProjectClick(project.document)} style={{ cursor: 'pointer' }}>
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
