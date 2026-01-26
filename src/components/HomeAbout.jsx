import { Link } from 'react-router-dom';
import './About.css'; // Reusing styles

const HomeAbout = () => {
    return (
        <section className="about-intro section">
            <div className="container">
                <div className="about-hero-grid">
                    <div className="hero-text-content">
                        <span className="hero-label animate-fade-in">Why PecPod?</span>
                        <h2 className="hero-title animate-fade-in-up">
                            Creative <br />
                            <span className="text-stroke">Consultancy</span>
                        </h2>
                        <p className="hero-description animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            We are not in the business to just provide graphic design services but also walk with you as your 'business partner' until the completion of any project.
                            <br /><br />
                            The ideology behind this is that we see each company as a brand that needs to create a lasting impression on the consumers and stakeholders through its communications.
                        </p>
                        <Link to="/about" className="btn-primary animate-fade-in-up" style={{ marginTop: '2rem', animationDelay: '0.4s' }}>
                            More About Us <span className="arrow">→</span>
                        </Link>
                    </div>

                    <div className="hero-visuals">
                        <div className="floating-card card-1 glass">
                            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" alt="Consultancy" />
                        </div>
                        <div className="floating-card card-2 glass">
                            <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" alt="Design" />
                        </div>
                        <div className="decorative-circle"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
