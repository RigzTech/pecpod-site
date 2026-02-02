import axios from 'axios';

async function fixInsights() {
    try {
        console.log('🔧 Fixing broken insights...\n');

        // Get all insights
        const response = await axios.get('http://localhost:5000/api/insights');
        const insights = response.data;

        console.log(`Found ${insights.length} insight(s)\n`);

        // Delete the broken one
        for (const insight of insights) {
            if (!insight.title || !insight.image || insight.category === 'Uncategorized') {
                console.log(`Deleting broken insight: ${insight._id}`);
                await axios.delete(`http://localhost:5000/api/insights/${insight._id}`);
                console.log('✅ Deleted successfully\n');
            }
        }

        // Add a sample insight with proper data
        console.log('Adding a sample insight with proper data...\n');

        const sampleInsight = {
            id: Date.now().toString(),
            title: 'The Future of Brand Identity',
            excerpt: 'Exploring how modern brands are evolving their visual identities to stay relevant in an increasingly digital world.',
            image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
            content: `The landscape of brand identity is undergoing a dramatic transformation. As we move deeper into the digital age, brands are discovering that traditional approaches to visual identity no longer suffice.

Modern consumers demand authenticity, flexibility, and meaningful connections. This shift has forced brands to rethink everything from their logo systems to their color palettes.

Key Trends Shaping Brand Identity

- Dynamic logos that adapt to context
- Sustainable design practices
- Inclusive visual language
- Digital-first thinking

"The most successful brands today are those that can maintain consistency while remaining flexible enough to evolve with their audience."

The rise of social media has fundamentally changed how brands present themselves. A static logo is no longer enough – brands need entire visual ecosystems that work across countless touchpoints.`,
            author: 'PecPod Team',
            readTime: '5 min read',
            featured: true
        };

        const newInsight = await axios.post('http://localhost:5000/api/insights', sampleInsight);
        console.log('✅ Sample insight added successfully!');
        console.log(`   Title: ${newInsight.data.title}`);
        console.log(`   ID: ${newInsight.data._id}\n`);

        console.log('🎉 All done! Check your Insights page now.');

    } catch (error) {
        console.error('❌ ERROR:', error.response?.data || error.message);
    }
}

fixInsights();
