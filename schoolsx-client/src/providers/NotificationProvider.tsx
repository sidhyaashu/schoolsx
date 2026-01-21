"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeSocket, getSocket, disconnectSocket } from '../lib/socket';
import { toast } from 'sonner';

interface Notification {
    id: number;
    userId: number;
    type: string;
    title: string;
    message: string;
    read: boolean;
    createdAt: string;
}

interface NotificationContextType {
    notifications: Notification[];
    unreadCount: number;
    markAsRead: (id: number) => void;
    markAllAsRead: () => void;
}

const NotificationContext = createContext<NotificationContextType>({
    notifications: [],
    unreadCount: 0,
    markAsRead: () => { },
    markAllAsRead: () => { }
});

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) return;

        // Initialize socket connection
        const socket = initializeSocket(token);

        // Listen for new notifications
        socket.on('notification', (notification: Notification) => {
            setNotifications(prev => [notification, ...prev]);
            setUnreadCount(prev => prev + 1);

            // Show toast notification
            toast.success(notification.title, {
                description: notification.message
            });
        });

        // Listen for chat messages
        socket.on('chat_message', (message: any) => {
            toast.info('New Message', {
                description: `New message from ${message.senderId}`
            });
        });

        // Cleanup on unmount
        return () => {
            disconnectSocket();
        };
    }, []);

    const markAsRead = (id: number) => {
        setNotifications(prev =>
            prev.map(n => n.id === id ? { ...n, read: true } : n)
        );
        setUnreadCount(prev => Math.max(0, prev - 1));
    };

    const markAllAsRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
        setUnreadCount(0);
    };

    return (
        <NotificationContext.Provider value={{ notifications, unreadCount, markAsRead, markAllAsRead }}>
            {children}
        </NotificationContext.Provider>
    );
};
