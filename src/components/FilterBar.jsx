import { useState, useEffect } from 'react';
import './FilterBar.css';
import { portfolioCategories } from '../data/portfolioData';

const FilterBar = ({ activeFilter, onFilterChange }) => {
    const [isSticky, setIsSticky] = useState(false);
    const categories = portfolioCategories;

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.querySelector('.hero-minimal')?.offsetHeight || 0;
            setIsSticky(window.scrollY > heroHeight - 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollRight = () => {
        const container = document.querySelector('.filter-bar-content');
        if (container) {
            container.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <div className={`filter-bar ${isSticky ? 'filter-bar-sticky' : ''}`}>
            <div className="container">
                <div className="filter-wrapper">
                    <div className="filter-bar-content">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${activeFilter === category ? 'filter-btn-active' : ''}`}
                                onClick={() => onFilterChange(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <button className="filter-scroll-btn" onClick={scrollRight} aria-label="Scroll right">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
