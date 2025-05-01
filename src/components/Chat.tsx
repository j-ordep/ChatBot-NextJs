'use client'

import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

// Gere um sessionId único por usuário/sessão
import { v4 as uuidv4 } from 'uuid';

type Message = {
  id: string;
  role: string;
  content: string;
};

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Gera um sessionId único por usuário/sessão
  const [sessionId] = useState(() => uuidv4());

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

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
    if (inputRef.current) inputRef.current.focus();
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages, sessionId }), // Envia sessionId
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

  return (
    <Card className="w-[440px] furia-card">
      <CardHeader>
        <CardTitle className="furia-title font-bold text-lg text-center w-full">
          Chat da FURIA
        </CardTitle>
      </CardHeader>
      <CardContent>
        {messages.length === 0 && !isLoading && (
          <div className="text-muted-foreground text-center py-8">
            <p>Bem-vindo ao Chat da FURIA! Envie uma mensagem para começar a conversar com o Furia AI</p>
          </div>
        )}
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 text-sm mb-4 w-full max-w-full ${message.role === "assistant" ? "furia-message-bot" : "furia-message-user"}`}
            >
              {message.role === "user" && (
                <Avatar className="flex-shrink-0">
                  <AvatarFallback>You</AvatarFallback>
                  <AvatarImage src="https://github.com/j-ordep.png" alt="Avatar do usuário" />
                </Avatar>
              )}
              {message.role === "assistant" && (
                <Avatar className="flex-shrink-0 border-2 border-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground">F</AvatarFallback>
                  <AvatarImage src="//logotyp.us/file/furia.svg" alt="Avatar da FURIA" />
                </Avatar>
              )}
              <div className="flex-1">
                <p className="leading-relaxed chat-message-text">
                  <span className="block font-bold mb-1">
                    {message.role === "user" ? "Você" : "FURIA AI"}:
                  </span>
                  {message.content}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 text-sm mb-4 w-full max-w-full furia-message-bot">
              <Avatar className="flex-shrink-0 border-2 border-primary">
                <AvatarFallback className="bg-primary text-primary-foreground">F</AvatarFallback>
                <AvatarImage src="" alt="Avatar da FURIA" />
              </Avatar>
              <div className="flex-1">
                <div className="leading-relaxed">
                  <span className="block font-bold mb-1">FURIA AI:</span>
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
          <Input
            ref={inputRef}
            className="placeholder:text-muted-foreground flex-1"
            placeholder="Digite sua mensagem..."
            value={input}
            onChange={handleInputChange}
            disabled={isLoading}
            aria-label="Digite sua mensagem"
          />
          <Button
            type="submit"
            className="group"
            disabled={isLoading || !input.trim()}
            aria-label="Enviar mensagem"
          >
            <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform mr-2" />
            Enviar
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}