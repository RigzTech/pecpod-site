import axios from 'axios';

async function addMoreInsights() {
    const insights = [
        {
            id: Date.now().toString() + '-2',
            title: 'Minimalism vs Maximalism in Design',
            excerpt: 'A deep dive into two opposing design philosophies and how to choose the right approach for your brand.',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
            content: `The debate between minimalism and maximalism has defined design discourse for decades. But the truth is, neither approach is inherently superior – it's all about finding what works for your specific brand and audience.

Understanding Minimalism

Minimalism strips away the unnecessary, focusing on essential elements. It's clean, sophisticated, and timeless. Brands like Apple have built empires on minimalist principles.

- Less is more
- Focus on whitespace
- Typography-driven
- Timeless appeal

The Case for Maximalism

Maximalism embraces abundance, color, and complexity. It's bold, expressive, and memorable. When done right, it creates unforgettable brand experiences.

"Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs

The key is understanding your brand's personality and your audience's preferences.`,
            author: 'PecPod Team',
            readTime: '6 min read',
            featured: false
        },
        {
            id: Date.now().toString() + '-3',
            title: 'The Psychology of Color in Branding',
            excerpt: 'How color choices influence consumer perception and drive brand recognition.',
            image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
            content: `Color is one of the most powerful tools in a designer's arsenal. It can evoke emotions, trigger memories, and influence purchasing decisions – often on a subconscious level.

The Science Behind Color Psychology

Research shows that up to 90% of snap judgments about products are based on color alone. This makes color selection one of the most critical decisions in brand development.

Common Color Associations

- Red: Energy, passion, urgency
- Blue: Trust, stability, professionalism
- Green: Growth, health, sustainability
- Yellow: Optimism, clarity, warmth

"Colors speak all languages." - Joseph Addison

Cultural context matters enormously. While white represents purity in Western cultures, it's associated with mourning in many Eastern cultures.`,
            author: 'PecPod Team',
            readTime: '7 min read',
            featured: true
        },
        {
            id: Date.now().toString() + '-4',
            title: 'Building a Sustainable Design Practice',
            excerpt: 'How design studios can reduce their environmental impact while maintaining creative excellence.',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
            content: `Sustainability is no longer optional – it's essential. Design studios have a responsibility to minimize their environmental impact while delivering exceptional work for clients.

Digital Carbon Footprint

Every website, every email, every cloud-stored file contributes to carbon emissions. Optimizing digital assets isn't just good practice – it's an environmental imperative.

Sustainable Design Principles

- Optimize images and assets
- Choose green hosting providers
- Design for longevity, not trends
- Reduce unnecessary complexity

"We don't inherit the earth from our ancestors; we borrow it from our children." - Native American Proverb

Small changes compound over time. Every optimization, every conscious choice, contributes to a more sustainable future for our industry.`,
            author: 'PecPod Team',
            readTime: '6 min read',
            featured: false
        }
    ];

    try {
        console.log('Adding more sample insights...\n');

        for (const insight of insights) {
            const result = await axios.post('http://localhost:5000/api/insights', insight);
            console.log(`✅ Added: ${result.data.title}`);
        }

        console.log('\n🎉 All insights added successfully!');
        console.log('Check your Insights page at http://localhost:5173/insights\n');

    } catch (error) {
        console.error('❌ ERROR:', error.response?.data || error.message);
    }
}

addMoreInsights();
