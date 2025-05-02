export type Message = {
  id: string;
  role: string;
  content: string;
};

// resposta do backend
export type ChatResponse = {
  role: string;
  content: string;
};

// Props useChatMessages
export interface ChatMessagesOptions {
  apiEndpoint?: string; 
  initialMessages?: Message[];
}

export interface ChatMessagesReturn {
  messages: Message[];
  input: string;
  isLoading: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export interface ChatMessageProps {
  message: Message;
  userAvatarUrl?: string;
  botAvatarUrl?: string;
}

export interface ChatTypingIndicatorProps {
  botName?: string;
}