const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

import { authService } from './auth.service';

export const studentService = {
    async getMySubjects() {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/student/my-subjects`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch subjects');
        }

        return response.json();
    },

    async getDashboardData() {
        // For now, let's just return a structure that matches what the UI expects
        // This is a placeholder until the server implements a full dashboard endpoint
        // You might want to parallelize these fetches
        const subjects = await this.getMySubjects();

        return {
            firstName: 'Student', // This should come from auth or profile
            stats: {
                mastery: { value: 75, trend: '+5%' },
                chapters: { value: 12, description: 'Completed this month' },
                accuracy: { value: 85, trend: '+2%' },
                dailyGoal: { value: '2h', description: 'Study time today' }
            },
            subjects // Inject the real subjects here
        };
    }
};
