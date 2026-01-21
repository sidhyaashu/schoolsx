import { redirect } from 'next/navigation';
import { ROLE_ROUTES } from './rbac';

export type UserRole = keyof typeof ROLE_ROUTES;

export interface Session {
    id: string;
    role: UserRole;
    schoolId: string;
    expiry?: number;
}

export const getSession = (): Session | null => {
    if (typeof window === 'undefined') return null;

    const sessionStr = localStorage.getItem('session');
    if (!sessionStr) return null;

    try {
        return JSON.parse(sessionStr) as Session;
    } catch (e) {
        return null;
    }
};

export const requireAuth = (allowedRoles?: UserRole[]) => {
    const session = getSession();

    if (!session) {
        // Not authenticated
        redirect('/login');
    }

    if (allowedRoles && !allowedRoles.includes(session.role)) {
        // Authenticated but unauthorized
        redirect('/unauthorized'); // Or a generic error page
    }

    return session;
};

export const redirectIfAuthenticated = () => {
    const session = getSession();
    if (session) {
        redirect(ROLE_ROUTES[session.role] as any);
    }
};
