import { PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3Client } from '../config/s3.js';
import { config } from '../config/env.js';
import crypto from 'crypto';

export class StorageService {
    private bucketName = config.aws.s3BucketName;

    async getPresignedUploadUrl(
        key: string,
        contentType: string,
        expiresIn = 3600
    ): Promise<string> {
        const command = new PutObjectCommand({
            Bucket: this.bucketName,
            Key: key,
            ContentType: contentType,
        }); // removed ACL: 'public-read' as it's often blocked by default S3 settings

        return getSignedUrl(s3Client, command, { expiresIn });
    }

    async deleteFile(key: string): Promise<void> {
        const command = new DeleteObjectCommand({
            Bucket: this.bucketName,
            Key: key,
        });

        await s3Client.send(command);
    }

    generateKey(originalName: string): string {
        const uniqueId = crypto.randomUUID();
        const extension = originalName.split('.').pop();
        return `${uniqueId}.${extension}`;
    }
}

export const storageService = new StorageService();
