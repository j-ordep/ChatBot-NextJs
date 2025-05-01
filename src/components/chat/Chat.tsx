'use client'

import { Send } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { ChatMessage } from "./ChatMessage";
import { ChatTypingIndicator } from "./ChatTypingIndicator";
import { useChatMessages } from "./useChatMessages";

export function Chat() {
  const {
    messages,
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useChatMessages();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Rola para a última mensagem quando novas mensagens são adicionadas
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (inputRef.current && !isLoading) {
      inputRef.current.focus();
    }
  }, [messages, isLoading]);

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
            <p>Bem-vindo ao Chat da FURIA! Envie uma mensagem para começar a conversar com o bot.</p>
          </div>
        )}
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {isLoading && <ChatTypingIndicator />}

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