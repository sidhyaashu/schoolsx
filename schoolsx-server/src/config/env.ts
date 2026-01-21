import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    database: {
        url: process.env.DATABASE_URL as string,
    },
    aws: {
        region: process.env.AWS_REGION as string,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
        s3BucketName: process.env.AWS_S3_BUCKET_NAME as string,
    },
};
