import axios from 'axios';

async function checkInsights() {
    try {
        const response = await axios.get('http://localhost:5000/api/insights');
        console.log('=== INSIGHTS DATABASE CHECK ===\n');
        console.log(`Total insights found: ${response.data.length}\n`);

        if (response.data.length === 0) {
            console.log('⚠️  DATABASE IS EMPTY - No insights found!');
            console.log('\nYou need to add insights via:');
            console.log('1. Admin panel at http://localhost:5173/admin');
            console.log('2. Or run: node seed.js (after fixing MongoDB)\n');
        } else {
            response.data.forEach((article, index) => {
                console.log(`\n--- Insight #${index + 1} ---`);
                console.log(`MongoDB _id: ${article._id}`);
                console.log(`Custom id: ${article.id || 'MISSING'}`);
                console.log(`Title: ${article.title || 'MISSING'}`);
                console.log(`Category: ${article.category || 'MISSING/UNDEFINED'}`);
                console.log(`Image URL: ${article.image || 'MISSING/UNDEFINED'}`);
                console.log(`Excerpt: ${article.excerpt ? article.excerpt.substring(0, 50) + '...' : 'MISSING'}`);
                console.log(`Featured: ${article.featured || false}`);
                console.log(`Date: ${article.date || 'MISSING'}`);
                console.log(`Read Time: ${article.readTime || 'MISSING'}`);

                // Check if image URL is valid
                if (article.image) {
                    if (!article.image.startsWith('http') && !article.image.startsWith('/uploads')) {
                        console.log('⚠️  WARNING: Image URL looks invalid!');
                    }
                }
            });
        }

    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            console.error('❌ ERROR: Cannot connect to backend server!');
            console.error('Make sure the server is running on http://localhost:5000');
        } else {
            console.error('❌ ERROR:', error.message);
        }
    }
}

checkInsights();
