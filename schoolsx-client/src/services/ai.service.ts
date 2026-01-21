const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const aiService = {
    async chat(message: string, context?: any) {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/ai/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ message, context })
        });

        if (!response.ok) throw new Error('AI request failed');
        return response.json();
    }
};
