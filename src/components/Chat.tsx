'use client'

import { useChat } from "@ai-sdk/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription className="text-foreground opacity-80">Using Vercel SDK</CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map(message => {
            return (
              <div key={message.id} className="flex gap-3 text-foreground text-sm mb-4 w-full max-w-full">
                {message.role === 'user' && (
                  <Avatar className="flex-shrink-0">
                    <AvatarFallback>JP</AvatarFallback>
                    <AvatarImage src="https://github.com/j-ordep.png"></AvatarImage>
                  </Avatar>
                )}
                {message.role === 'assistant' && (
                  <Avatar className="flex-shrink-0">
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src=""></AvatarImage>
                  </Avatar>
                )}

                <div className="flex-1">
                  <p className="leading-relaxed chat-message-text">
                    <span className="block font-bold">{message.role === 'user' ? 'You' : 'AI'}:</span>
                    {message.content}
                  </p>
                </div>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
          <Input
            className="dark:placeholder:text-white"
            placeholder="how can I help you"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>

  );
}