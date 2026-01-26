import { useState } from 'react';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import Portfolio from '../components/Portfolio';
import HomeAbout from '../components/HomeAbout';
import HomeServices from '../components/HomeServices';
import HomeInsights from '../components/HomeInsights';
import CTA from '../components/CTA';

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
            <HomeServices />
            <HomeAbout />
            <HomeInsights />
            <CTA />
        </div>
    );
};

export default Home;
