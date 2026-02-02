import axios from 'axios';

async function cleanupBrokenInsights() {
    try {
        console.log('🧹 Cleaning up broken insights...\n');

        const response = await axios.get('http://localhost:5000/api/insights');
        const insights = response.data;

        console.log(`Found ${insights.length} total insights\n`);

        for (const insight of insights) {
            // Delete insights with "Uncategorized" category or missing content/excerpt
            const isBroken =
                insight.category === 'Uncategorized' ||
                !insight.content ||
                !insight.excerpt ||
                !insight.title;

            if (isBroken) {
                console.log(`❌ Deleting broken insight:`);
                console.log(`   ID: ${insight._id}`);
                console.log(`   Title: ${insight.title || 'MISSING'}`);
                console.log(`   Category: ${insight.category || 'NONE'}`);
                console.log(`   Has content: ${!!insight.content}`);
                console.log(`   Has excerpt: ${!!insight.excerpt}\n`);

                await axios.delete(`http://localhost:5000/api/insights/${insight._id}`);
                console.log(`   ✅ Deleted\n`);
            }
        }

        // Show remaining insights
        const finalResponse = await axios.get('http://localhost:5000/api/insights');
        console.log(`\n✅ Cleanup complete!`);
        console.log(`Remaining insights: ${finalResponse.data.length}`);

        finalResponse.data.forEach((insight, i) => {
            console.log(`  ${i + 1}. ${insight.title}`);
        });

    } catch (error) {
        console.error('ERROR:', error.message);
    }
}

cleanupBrokenInsights();
