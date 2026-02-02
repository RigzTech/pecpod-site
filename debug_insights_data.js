const axios = require('axios');

async function checkInsights() {
    try {
        const response = await axios.get('http://localhost:5000/api/insights');
        console.log('--- Insight Data Check ---');
        console.log(`Found ${response.data.length} insights.`);

        response.data.forEach((article, index) => {
            console.log(`\nInsight #${index + 1}:`);
            console.log(`  _id: ${article._id}`);
            console.log(`  id: ${article.id} (Custom ID)`);
            console.log(`  title: ${article.title}`);
            console.log(`  image: ${article.image ? article.image.substring(0, 50) + '...' : 'UNDEFINED/NULL'}`);
            console.log(`  category: ${article.category}`);
            console.log(`  content length: ${article.content ? article.content.length : 0}`);
        });

    } catch (error) {
        console.error('Error fetching insights:', error.message);
    }
}

checkInsights();
