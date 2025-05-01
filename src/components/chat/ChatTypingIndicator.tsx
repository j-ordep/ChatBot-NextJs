'use client'

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChatTypingIndicatorProps } from "./types";

export function ChatTypingIndicator({ botName = "FURIA AI" }: ChatTypingIndicatorProps) {
    return (
        <div className="flex gap-3 text-sm mb-4 w-full max-w-full furia-message-bot">
            <Avatar className="flex-shrink-0 border-2 border-primary">
                <AvatarFallback className="bg-primary text-primary-foreground">F</AvatarFallback>
                <AvatarImage src="//logotyp.us/file/furia.svg" alt="Avatar da FURIA" />
            </Avatar>
            <div className="flex-1">
                <div className="leading-relaxed">
                    <span className="block font-bold mb-1">{botName}:</span>
                    <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}