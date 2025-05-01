'use client'

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChatMessageProps } from "./types";

export function ChatMessage({
    message,
    userAvatarUrl = "https://github.com/j-ordep.png",
    botAvatarUrl = "//logotyp.us/file/furia.svg"
}: ChatMessageProps) {
    const isUser = message.role === "user";

    return (
        <div
            className={`flex gap-3 text-sm mb-4 w-full max-w-full ${isUser ? "furia-message-user" : "furia-message-bot"}`}
        >
            {isUser ? (
                <Avatar className="flex-shrink-0">
                    <AvatarFallback>You</AvatarFallback>
                    <AvatarImage src={userAvatarUrl} alt="Avatar do usuário" />
                </Avatar>
            ) : (
                <Avatar className="flex-shrink-0 border-2 border-primary">
                    <AvatarFallback className="bg-primary text-primary-foreground">F</AvatarFallback>
                    <AvatarImage src={botAvatarUrl} alt="Avatar da FURIA" />
                </Avatar>
            )}
            <div className="flex-1">
                <p className="leading-relaxed chat-message-text">
                    <span className="block font-bold mb-1">
                        {isUser ? "Você" : "FURIA AI"}:
                    </span>
                    {message.content}
                </p>
            </div>
        </div>
    );
}