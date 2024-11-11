import { setupServer } from 'msw/node';

import Console from '@utils/Console';
import { handlers } from './handlers';

export const server = setupServer(...handlers);

server.events.on('request:start', ({ request }) => {
  Console.info('MSW intercepted:', request.method, request.url);
});
