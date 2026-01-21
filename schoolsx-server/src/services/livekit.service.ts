import { AccessToken } from 'livekit-server-sdk';
import { config } from '../config/env.js';

export class LiveKitService {
    /**
     * Generate access token for joining a LiveKit room
     */
    async generateToken(roomName: string, participantName: string, metadata?: string): Promise<string> {
        const tokenOptions: any = {
            identity: participantName
        };
        if (metadata) {
            tokenOptions.metadata = metadata;
        }

        const at = new AccessToken(config.livekit.apiKey, config.livekit.apiSecret, tokenOptions);

        at.addGrant({
            roomJoin: true,
            room: roomName,
            canPublish: true,
            canSubscribe: true,
            canPublishData: true
        });

        return await at.toJwt();
    }

    /**
     * Generate token for teacher with additional permissions
     */
    async generateTeacherToken(roomName: string, teacherName: string): Promise<string> {
        const at = new AccessToken(config.livekit.apiKey, config.livekit.apiSecret, {
            identity: teacherName,
            metadata: JSON.stringify({ role: 'teacher' })
        });

        at.addGrant({
            roomJoin: true,
            room: roomName,
            canPublish: true,
            canSubscribe: true,
            canPublishData: true,
            roomAdmin: true, // Can remove participants
            roomRecord: true  // Can start/stop recording
        });

        return await at.toJwt();
    }

    /**
     * Generate token for student
     */
    async generateStudentToken(roomName: string, studentName: string): Promise<string> {
        const at = new AccessToken(config.livekit.apiKey, config.livekit.apiSecret, {
            identity: studentName,
            metadata: JSON.stringify({ role: 'student' })
        });

        at.addGrant({
            roomJoin: true,
            room: roomName,
            canPublish: true,  // Can share video/audio
            canSubscribe: true,
            canPublishData: true // Can use chat
        });

        return await at.toJwt();
    }
}

export const livekitService = new LiveKitService();
