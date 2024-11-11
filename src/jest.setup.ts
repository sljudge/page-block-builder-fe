import { server } from '@/services/mocks/server';
import { fetch } from 'cross-fetch';

// Need polyfill here to account for directus sdk implementation
global.fetch = fetch;

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
