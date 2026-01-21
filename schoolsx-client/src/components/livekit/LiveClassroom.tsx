"use client";

import React, { useEffect, useState } from 'react';
import { Room } from 'livekit-client';
import {
    LiveKitRoom,
    VideoConference,
    RoomAudioRenderer,
    ControlBar,
    GridLayout,
    ParticipantTile,
} from '@livekit/components-react';
import '@livekit/components-styles';
import { livekitService } from '@/services/livekit.service';

interface LiveClassroomProps {
    roomName: string;
    onDisconnect?: () => void;
}

export const LiveClassroom: React.FC<LiveClassroomProps> = ({ roomName, onDisconnect }) => {
    const [token, setToken] = useState<string>('');
    const [wsUrl, setWsUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAccessToken = async () => {
            try {
                setIsLoading(true);
                const data = await livekitService.getToken(roomName);
                setToken(data.token);
                setWsUrl(data.wsUrl);
                setError(null);
            } catch (err) {
                setError('Failed to join classroom. Please try again.');
                console.error('Error getting LiveKit token:', err);
            } finally {
                setIsLoading(false);
            }
        };

        getAccessToken();
    }, [roomName]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Joining classroom...</p>
                </div>
            </div>
        );
    }

    if (error || !token || !wsUrl) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center max-w-md">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-red-800 mb-2">Connection Error</h3>
                        <p className="text-red-600">{error || 'Unable to connect to classroom'}</p>
                        <button
                            onClick={onDisconnect}
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen w-full">
            <LiveKitRoom
                video={true}
                audio={true}
                token={token}
                serverUrl={wsUrl}
                onDisconnected={onDisconnect}
                data-lk-theme="default"
                style={{ height: '100vh' }}
            >
                <VideoConference />
                <RoomAudioRenderer />
            </LiveKitRoom>
        </div>
    );
};
