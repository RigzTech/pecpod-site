import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="section py-20 bg-dark text-white text-center">
            <div className="container">
                <div className="cta-content max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
                        Ready to <span className="text-gold">Create?</span>
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Let's collaborate to build a brand that stands out. Whether you need a new identity, a website, or a marketing strategy, we are here to help.
                    </p>
                    <Link to="/contact" className="btn-primary">
                        Start a Project
                    </Link>
                </div>
            </div>

            <style>{`
                .bg-dark { background-color: var(--color-navy-dark); }
                .text-white { color: var(--color-white); }
                .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
                .max-w-2xl { max-width: 42rem; }
                .mx-auto { margin-left: auto; margin-right: auto; }
                .font-display { font-family: var(--font-display); }
                .text-3xl { font-size: 1.875rem; }
                .md\\:text-5xl { font-size: 2.5rem; } 
                .mb-6 { margin-bottom: 1.5rem; }
                .mb-8 { margin-bottom: 2rem; }
                .text-lg { font-size: 1.125rem; }
                .text-gray-300 { color: #d1d5db; }
                @media (min-width: 768px) {
                    .md\\:text-5xl { font-size: 3rem; }
                }
            `}</style>
        </section>
    );
};

export default CTA;
