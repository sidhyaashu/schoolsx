const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const assignmentService = {
    async getMyAssignments() {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/assignments`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error('Failed to fetch assignments');
        return response.json();
    },

    async submitAssignment(data: { assignmentId: number; fileUrl: string }) {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/assignments/submit`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('Failed to submit assignment');
        return response.json();
    }
};
