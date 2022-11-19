import { Router } from 'itty-router';

import Posts from './handlers/posts';
import Post from './handlers/post';

const router = Router();

router
  .get('/products', Posts)
  .get('/products/:id', Post)
  .get('*', () => new Response('Not found', { status: 404 }));

export const handleRequest = (request:Request) => router.handle(request);