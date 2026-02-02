import axios from 'axios';

async function checkArticleContent() {
    try {
        const response = await axios.get('http://localhost:5000/api/insights');
        console.log('=== CHECKING ARTICLE CONTENT ===\n');

        response.data.forEach((article, index) => {
            console.log(`\n--- Article #${index + 1}: ${article.title} ---`);
            console.log(`ID: ${article.id || article._id}`);
            console.log(`Has content: ${article.content ? 'YES' : 'NO'}`);

            if (article.content) {
                const contentLength = article.content.length;
                const preview = article.content.substring(0, 200);
                console.log(`Content length: ${contentLength} characters`);
                console.log(`Content preview:\n${preview}...`);
            } else {
                console.log('⚠️  WARNING: This article has NO content!');
            }
        });

    } catch (error) {
        console.error('ERROR:', error.message);
    }
}

checkArticleContent();
