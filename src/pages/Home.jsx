import { useState } from 'react';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import Portfolio from '../components/Portfolio';

const Home = () => {
    const [activeFilter, setActiveFilter] = useState('ALL');

    return (
        <div className="home-page">
            <Hero />
            <FilterBar
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
            />
            <Portfolio activeFilter={activeFilter} />
        </div>
    );
};

export default Home;
