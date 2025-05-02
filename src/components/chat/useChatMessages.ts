'use client'

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatMessagesOptions, ChatMessagesReturn, Message } from './types';

export function useChatMessages({
  apiEndpoint = '/api/routes',
  initialMessages = []
}: ChatMessagesOptions = {}): ChatMessagesReturn {
  
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [sessionId] = useState(() => uuidv4());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };
    
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);
    setInput("");
    
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: updatedMessages, 
          sessionId 
        }),
      });
      
      const data = await response.json();
      
      if (data && data.content) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "-bot",
            role: data.role || "assistant",
            content: data.content,
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "-error",
          role: "assistant",
          content: "Erro ao se comunicar com o servidor.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
    setInput,
  };
}