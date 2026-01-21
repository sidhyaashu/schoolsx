import { useState } from 'react';
import { aiService } from '../services/ai.service';

export interface ChatMessage {
    role: 'user' | 'model';
    content: string;
}

export const useChat = (contextId?: string) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg: ChatMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const data = await aiService.chat(input, { contextId });
            const aiMsg: ChatMessage = { role: 'model', content: data.response };
            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error(error);
            const errorMsg: ChatMessage = { role: 'model', content: "Sorry, I'm having trouble connecting right now." };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        messages,
        input,
        setInput,
        sendMessage,
        isLoading
    };
};
