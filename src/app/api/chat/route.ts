import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Certifique-se de que process.env.OPENAI_API_KEY está disponível
  if (!process.env.OPENAI_API_KEY) {
    return new Response('API key not found', { status: 500 });
  }

  const result = streamText({
    model: openai('GPT-3.5-turbo'),
    system: `You are a helpful assistant. Check your knowledge base before answering any questions.
    Only respond to questions using information from tool calls.
    if no relevant information is found in the tool calls, respond, "Sorry, I don't know."`,
    messages,
  });

  return result.toDataStreamResponse();
}