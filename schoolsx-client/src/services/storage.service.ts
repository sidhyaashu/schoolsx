const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const storageService = {
    /**
     * Upload a file to S3 using presigned URLs
     * This is a two-step process:
     * 1. Get a presigned URL from the server
     * 2. PUT the file directly to S3 using that URL
     */
    async uploadFile(file: File): Promise<string> {
        const token = localStorage.getItem('token');

        // Step 1: Get presigned URL from server
        const response = await fetch(`${API_URL}/storage/upload-url`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fileName: file.name,
                contentType: file.type
            })
        });

        if (!response.ok) {
            throw new Error('Failed to get upload URL');
        }

        const { uploadUrl, fileKey } = await response.json();

        // Step 2: Upload file directly to S3
        const uploadResponse = await fetch(uploadUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': file.type
            },
            body: file
        });

        if (!uploadResponse.ok) {
            throw new Error('Failed to upload file to S3');
        }

        // Return the final file URL
        return fileKey;
    }
};
