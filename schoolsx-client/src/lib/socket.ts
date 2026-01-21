"use client";

import { io, Socket } from 'socket.io-client';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

let socket: Socket | null = null;

export const initializeSocket = (token: string) => {
    if (socket && socket.connected) {
        return socket;
    }

    socket = io(API_URL, {
        auth: {
            token
        },
        autoConnect: true,
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5
    });

    socket.on('connect', () => {
        console.log('✅ Connected to WebSocket server');
    });

    socket.on('disconnect', () => {
        console.log('❌ Disconnected from WebSocket server');
    });

    socket.on('connect_error', (error) => {
        console.error('WebSocket connection error:', error);
    });

    return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
    if (socket) {
        socket.disconnect();
        socket = null;
    }
};
