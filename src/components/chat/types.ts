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

// Props do hook useChatMessages
export interface ChatMessagesOptions {
  apiEndpoint?: string; // Endpoint da API, padrão é "/api/chat"
  initialMessages?: Message[]; // Mensagens iniciais
}

// Retorno do hook useChatMessages
export interface ChatMessagesReturn {
  messages: Message[];
  input: string;
  isLoading: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

// Props do componente ChatMessage
export interface ChatMessageProps {
  message: Message;
  userAvatarUrl?: string;
  botAvatarUrl?: string;
}

// Props do componente ChatTypingIndicator
export interface ChatTypingIndicatorProps {
  botName?: string;
}