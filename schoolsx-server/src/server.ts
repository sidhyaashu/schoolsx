import app from './app.js';
import { config } from './config/env.js';

const startServer = async () => {
    try {
        app.listen(config.port, () => {
            console.log(`Server running on port ${config.port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
