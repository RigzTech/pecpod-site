import './Hero.css';

const Hero = () => {
    const scrollToWork = () => {
        const element = document.getElementById('portfolio');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero-minimal">
            {/* Floating Geometric Accents */}
            {/* Kinetic Gallery Visuals */}
            <div className="hero-kinetic-scene">
                {/* Layer 1: Ambient Orbs (Background) */}
                <div className="layer layer-back">
                    <div className="orb orb-1"></div>
                    <div className="orb orb-2"></div>
                    <div className="orb orb-3"></div>
                </div>

                {/* Layer 2: Geometric & Glass Shards (Midground) */}
                <div className="layer layer-mid">
                    <div className="shard glass-shard-1"></div>
                    <div className="shard glass-shard-2"></div>
                    <div className="shard gold-geo-1"></div>
                    <div className="shard gold-geo-2"></div>
                    <div className="shard wireframe-cube"></div>
                </div>

                {/* Layer 3: Gold Dust (Foreground) */}
                <div className="layer layer-front">
                    {[...Array(12)].map((_, i) => (
                        <span key={i} className={`dust-particle dust-${i + 1}`}></span>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="hero-minimal-content">
                    <h1 className="hero-minimal-title">
                        WORK THAT<br />
                        <span className="hero-gold-word" data-text="SPEAKS">SPEAKS</span>
                    </h1>

                    <p className="hero-tagline">
                        Discover our portfolio of impactful design solutions that drive results.
                    </p>

                    <button onClick={scrollToWork} className="hero-explore">
                        <span>EXPLORE</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ display: 'block' }}>
                            <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
