# FURIA Chat - Aplicação de Chat com Inteligência Artificial

Este projeto é uma aplicação de chat personalizada para a FURIA que utiliza inteligência artificial através do n8n para interagir com os usuários.

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** - Framework React com renderização híbrida, roteamento e ferramentas de desenvolvimento
- **[React](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript tipado
- **[Shadcn UI](https://ui.shadcn.com/)** - Componentes de UI reutilizáveis e acessíveis
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[n8n](https://n8n.io/)** - Plataforma de automação de fluxo de trabalho para integração com IA
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Solução de tema escuro/claro para Next.js
- **[uuid](https://www.npmjs.com/package/uuid)** - Geração de IDs únicos para sessões de chat

## Funcionalidades

- Interface de chat amigável e responsiva personalizada para FURIA
- Integração com n8n para processamento de mensagens via IA
- Tema claro/escuro com alternância automática
- Histórico de chat persistente por usuário (via Redis no n8n)
- Design moderno e acessível
- Indicador de digitação durante o carregamento de respostas

## Começando

Primeiro, instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

Depois, configure as variáveis de ambiente criando um arquivo `.env.local` na raiz do projeto:

```
NEXT_PUBLIC_N8N_WEBHOOK_URL=sua-url-do-webhook-n8n
```

Em seguida, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

```
src/
  app/               # Estrutura de rotas do Next.js
    api/             # Rotas de API
      chat/          # Endpoint da API de chat para comunicação com n8n
    globals.css      # Estilos globais e temas
    layout.tsx       # Layout principal
    page.tsx         # Página inicial
  components/        # Componentes React
    Chat.tsx         # Componente principal de chat
    ui/              # Componentes de UI (shadcn)
  lib/               # Utilitários e helpers
```

## Configuração do n8n

O projeto utiliza um workflow no n8n com os seguintes componentes:
- Webhook para receber mensagens do frontend
- AI Agent para processamento de mensagens
- Redis Chat Memory para histórico de conversas por sessionId (opcional)

É necessário ativar o fluxo de trabalho no n8n e configurar corretamente a URL do webhook no arquivo de ambiente.

## Aprendendo Mais

Para saber mais sobre as tecnologias utilizadas:

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do React](https://reactjs.org/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação do Shadcn UI](https://ui.shadcn.com/docs)
- [Documentação do n8n](https://docs.n8n.io/)

## Implantação

A maneira mais fácil de implantar sua aplicação Next.js é usar a [Plataforma Vercel](https://vercel.com/new).
