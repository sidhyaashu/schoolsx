import { PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3Client } from '../config/s3.js';
import { config } from '../config/env.js';
import crypto from 'crypto';

export class StorageService {
    async uploadFile(file: Buffer, fileName: string): Promise<string> {
        const key = `uploads/${Date.now()}-${fileName}`;
        await s3Client.send(
            new PutObjectCommand({
                Bucket: config.aws.s3BucketName,
                Key: key,
                Body: file,
            })
        );
        return `https://${config.aws.s3BucketName}.s3.${config.aws.region}.amazonaws.com/${key}`;
    }

    async deleteFile(fileUrl: string): Promise<void> {
        const key = fileUrl.split('.com/')[1];
        await s3Client.send(
            new DeleteObjectCommand({
                Bucket: config.aws.s3BucketName,
                Key: key,
            })
        );
    }

    /**
     * Generate a presigned URL for direct client upload to S3
     * Returns a URL that clients can PUT files to
     */
    async getUploadUrl(fileName: string, contentType: string): Promise<{ uploadUrl: string; fileKey: string }> {
        const key = `uploads/${Date.now()}-${fileName}`;

        const command = new PutObjectCommand({
            Bucket: config.aws.s3BucketName,
            Key: key,
            ContentType: contentType,
        });

        const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        const fileUrl = `https://${config.aws.s3BucketName}.s3.${config.aws.region}.amazonaws.com/${key}`;

        return { uploadUrl, fileKey: fileUrl };
    }
}

export const storageService = new StorageService();
