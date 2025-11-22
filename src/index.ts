import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'
import { Hono } from 'hono'
import { barbers } from './data.js'
import { BarberSchema } from './types.js'

const app = new Hono()
const api = new OpenAPIHono<{ Bindings: { API_KEY: string } }>()

const welcomeStrings = [
  "Hello Hono!",
  "To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/hono",
]

api.use('/api/*', async (c, next) => {
  const apiKey = c.req.header('x-api-key')
  const validApiKey = c.env?.API_KEY || process.env.API_KEY

  if (!validApiKey) {
    console.warn('API_KEY is not set in environment!')
    return c.json({ error: 'Internal Server Error' }, 500)
  }

  if (apiKey !== validApiKey) {
    return c.json({ error: 'Unauthorized' }, 401)
  }
  await next()
})

app.get('/', (c) => {
  return c.text(welcomeStrings.join('\n\n'))
})

const getBarbersRoute = createRoute({
  method: 'get',
  path: '/api/v1/barbers',
  security: [{ apiKey: [] }],
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.array(BarberSchema),
        },
      },
      description: 'Retrieve a list of barbers',
    },
    401: {
      description: 'Unauthorized',
    },
  },
})

api.openapi(getBarbersRoute, (c) => {
  return c.json(barbers)
})

api.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Barber API',
  },
})

api.get(
  '/reference',
  apiReference({
    spec: {
      url: '/doc',
    },
  } as any)
)

api.openAPIRegistry.registerComponent('securitySchemes', 'apiKey', {
  type: 'apiKey',
  name: 'x-api-key',
  in: 'header',
})

app.route('/', api)

export default app
