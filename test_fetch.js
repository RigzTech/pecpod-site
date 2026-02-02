import axios from 'axios';

async function testArticleFetch() {
    try {
        // First get all articles
        const allRes = await axios.get('http://localhost:5000/api/insights');
        console.log('=== TESTING ARTICLE FETCH ===\n');
        console.log(`Total articles: ${allRes.data.length}\n`);

        // Try to fetch each article by its ID
        for (const article of allRes.data) {
            console.log(`\nTesting: ${article.title}`);
            console.log(`  Custom ID: ${article.id}`);
            console.log(`  MongoDB _id: ${article._id}`);

            // Try fetching by custom ID
            try {
                const byCustomId = await axios.get(`http://localhost:5000/api/insights/${article.id}`);
                console.log(`  ✅ Fetch by custom ID works`);
                console.log(`     Has content: ${byCustomId.data.content ? 'YES (' + byCustomId.data.content.length + ' chars)' : 'NO'}`);
            } catch (err) {
                console.log(`  ❌ Fetch by custom ID failed: ${err.response?.status || err.message}`);
            }

            // Try fetching by MongoDB _id
            try {
                const byMongoId = await axios.get(`http://localhost:5000/api/insights/${article._id}`);
                console.log(`  ✅ Fetch by MongoDB _id works`);
                console.log(`     Has content: ${byMongoId.data.content ? 'YES (' + byMongoId.data.content.length + ' chars)' : 'NO'}`);
            } catch (err) {
                console.log(`  ❌ Fetch by MongoDB _id failed: ${err.response?.status || err.message}`);
            }
        }

    } catch (error) {
        console.error('ERROR:', error.message);
    }
}

testArticleFetch();
