# Chat AI - Aplicação de Chat com Inteligência Artificial

Este projeto é uma aplicação de chat que utiliza inteligência artificial para interagir com os usuários, criada com tecnologias modernas de frontend e backend.

![Chat AI Screenshot](https://via.placeholder.com/800x400?text=Chat+AI+Screenshot)

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** - Framework React com renderização híbrida, roteamento e ferramentas de desenvolvimento
- **[React](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript tipado
- **[Shadcn UI](https://ui.shadcn.com/)** - Componentes de UI reutilizáveis e acessíveis
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Vercel AI SDK](https://sdk.vercel.ai/docs)** - SDK para integração com modelos de IA
- **[OpenAI API](https://openai.com/api/)** - API de modelos de linguagem avançados
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Solução de tema escuro/claro para Next.js

## Funcionalidades

- Interface de chat amigável e responsiva
- Integração com modelos de linguagem da OpenAI
- Tema claro/escuro com alternância automática
- Streaming de respostas em tempo real
- Design moderno e acessível

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
OPENAI_API_KEY=sua-chave-aqui
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
      chat/          # Endpoint da API de chat
    globals.css      # Estilos globais e temas
    layout.tsx       # Layout principal
    page.tsx         # Página inicial
  components/        # Componentes React
    Chat.tsx         # Componente principal de chat
    ui/              # Componentes de UI (shadcn)
  lib/               # Utilitários e helpers
```

## Aprendendo Mais

Para saber mais sobre as tecnologias utilizadas:

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do React](https://reactjs.org/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação do Shadcn UI](https://ui.shadcn.com/docs)
- [Documentação do Vercel AI SDK](https://sdk.vercel.ai/docs)

## Implantação

A maneira mais fácil de implantar sua aplicação Next.js é usar a [Plataforma Vercel](https://vercel.com/new).
