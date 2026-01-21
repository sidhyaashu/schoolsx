import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key-change-in-production',
    clientUrl: process.env.CLIENT_URL || 'http://localhost:3001',
    database: {
        url: process.env.DATABASE_URL || ''
    },
    aws: {
        region: process.env.AWS_REGION || 'us-east-1',
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
        s3BucketName: process.env.AWS_S3_BUCKET_NAME || ''
    },
    livekit: {
        apiKey: process.env.LIVEKIT_API_KEY || '',
        apiSecret: process.env.LIVEKIT_API_SECRET || '',
        wsUrl: process.env.LIVEKIT_WS_URL || 'ws://localhost:7880'
    }
};
