import { createServer } from 'http';
import app from './app.js';
import { config } from './config/env.js';
import { socketService } from './services/socket.service.js';

const startServer = async () => {
    try {
        // Create HTTP server
        const httpServer = createServer(app);

        // Initialize Socket.io
        socketService.initialize(httpServer);

        httpServer.listen(config.port, () => {
            console.log(`🚀 Server running on port ${config.port}`);
            console.log(`📡 WebSocket server ready`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
