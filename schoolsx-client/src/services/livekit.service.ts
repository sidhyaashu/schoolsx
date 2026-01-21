const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const livekitService = {
    /**
     * Get access token for joining a LiveKit room
     */
    async getToken(roomName: string): Promise<{ token: string; wsUrl: string; roomName: string }> {
        const token = localStorage.getItem('token');

        const response = await fetch(`${API_URL}/livekit/token`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ roomName })
        });

        if (!response.ok) {
            throw new Error('Failed to get LiveKit token');
        }

        return await response.json();
    }
};
