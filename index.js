try {
    console.log('Starting Pecpod Server...');
    await import('./server/index.js');
} catch (err) {
    console.error('FAILED TO START SERVER:');
    console.error(err);
    // Exit with error so Passenger can catch it
    process.exit(1);
}
