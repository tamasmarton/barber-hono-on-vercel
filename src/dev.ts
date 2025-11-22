import { serve } from '@hono/node-server'
import 'dotenv/config'
import app from './index.js'

console.log('Server is running on http://localhost:3000')

serve({
  fetch: app.fetch,
  port: 3000
})
