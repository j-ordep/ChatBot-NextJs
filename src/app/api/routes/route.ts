export const maxDuration = 45;

export async function POST(req: Request) {
  const { messages, sessionId } = await req.json();

  if (process.env.N8N_WEBHOOK_URL) {
    try {
      const n8nResponse = await fetch(process.env.N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, sessionId }),
      });

      const n8nData = await n8nResponse.json();
      console.log('Resposta recebida do n8n:', n8nData);
      
      const firstMessage = Array.isArray(n8nData) ? n8nData[0] : n8nData;

      return new Response(
        JSON.stringify({
          role: firstMessage.role,
          content: firstMessage.content
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      console.error('Erro ao enviar para o webhook n8n:', error);
      return new Response('Erro ao processar a resposta do n8n', { status: 500 });
    }
  }

  return new Response(JSON.stringify({ status: 'ok' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}