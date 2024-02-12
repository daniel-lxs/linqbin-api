import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { entryController } from './controllers/entry/entryController';

const app = new Hono();
app.use(
  '/*',
  cors({
    origin: ['https://linqb.in', 'https://linqbin.cc'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    exposeHeaders: ['Content-Length'],
    maxAge: 600,
    credentials: true,
  })
);

entryController(app);

app.get('/', (c) => {
  return c.text('OK');
});

console.log(`[App] Server listening on port ${process.env.PORT || 4000}`);

export default {
  fetch: app.fetch,
  port: process.env.PORT || 4000,
};
