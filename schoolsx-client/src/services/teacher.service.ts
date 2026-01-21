const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const teacherService = {
    async getMyClasses() {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/teacher/classes`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error('Failed to fetch classes');
        return response.json();
    }
};
