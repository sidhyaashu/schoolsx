"use client";

import { useState } from "react";
import { generateAiResponse, PERSONAS } from "@schoolx/ai/lib/gemini";

interface Message {
    role: "user" | "model";
    content: string;
}

export function useChat(persona: keyof typeof PERSONAS) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const responseText = await generateAiResponse(input, PERSONAS[persona]);
            const aiMessage: Message = { role: "model", content: responseText };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error("AI Error", error);
            const errorMessage: Message = { role: "model", content: "Sorry, I'm having trouble connecting to my brain right now. Please try again later." };
            setMessages((prev) => [...prev, errorMessage]);
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
}
