# Barber API

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tamasmarton/barber-hono-on-vercel)

A modern, type-safe REST API for managing barber information, built with [Hono](https://hono.dev/), [Zod](https://zod.dev/), and deployed on [Vercel](https://vercel.com/).

## Features

- 🔒 **API Key Authentication** - Secure endpoints with header-based authentication
- 📚 **Interactive API Documentation** - Built-in [Scalar](https://scalar.com/) API reference UI
- ✅ **Type Safety** - Full TypeScript support with Zod schema validation
- 🚀 **Edge Runtime** - Optimized for Vercel's serverless functions
- 📖 **OpenAPI 3.0** - Auto-generated specification from code

## API Endpoints

### Get Barbers
```
GET /api/v1/barbers
```

Returns a list of barbers with their schedules.

**Authentication**: Requires `x-api-key` header

**Response**:
```json
[
  {
    "name": "Kovács János",
    "workSchedule": {
      "Monday": { "start": "09:00", "end": "17:00" },
      ...
    }
  }
]
```

### API Documentation
- **OpenAPI Spec**: `/doc`
- **Interactive Docs**: `/reference`

## Development

### Prerequisites

- Node.js 18+
- pnpm (or npm)

### Environment Variables

Create a `.env` file in the root directory:

```bash
API_KEY=your-secret-api-key-here
```

### Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Or use start script
pnpm start
```

The API will be available at `http://localhost:3000`

### Testing the API

```bash
# Without API key (returns 401)
curl http://localhost:3000/api/v1/barbers

# With API key (returns 200)
curl -H "x-api-key: your-secret-api-key-here" http://localhost:3000/api/v1/barbers
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add `API_KEY` environment variable in Vercel project settings
4. Deploy!

Or use the button above to deploy instantly.

### Environment Variables on Vercel

Make sure to set the following environment variable in your Vercel project settings:

- `API_KEY` - Your secure API key for authentication

## Tech Stack

- **[Hono](https://hono.dev/)** - Ultrafast web framework
- **[@hono/zod-openapi](https://github.com/honojs/middleware)** - OpenAPI integration
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[Scalar](https://scalar.com/)** - Beautiful API documentation
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vercel](https://vercel.com/)** - Serverless deployment

## Project Structure

```
├── src/
│   ├── index.ts      # Main application entry point
│   ├── types.ts      # Zod schemas and TypeScript types
│   ├── data.ts       # Mock barber data
│   └── dev.ts        # Local development server
├── .env              # Environment variables (not committed)
├── .env.example      # Example environment variables
└── package.json      # Dependencies and scripts
```

## License

MIT
