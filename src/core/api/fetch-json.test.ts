import { fetchJSON, fetchJSONWithAbort } from './fetch-json';
import { API_ROUTES } from './api.constants';
import {
  abortResponse,
  jsonResponse,
  mockFailedResponse,
  mockSuccessResponse,
} from './fetch-json.mock';

describe('Fetch JSON API', () => {
  it('fetch correctly data', async () => {
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve(mockJsonPromise);
    // @ts-ignore
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    // @ts-ignore
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    const result = await fetchJSON(API_ROUTES.LOGIN, { method: 'POST' });
    expect(JSON.stringify(result)).toBe(JSON.stringify(jsonResponse));
  });

  it('fetch incorrectly data', async () => {
    const mockJsonPromise = Promise.resolve(mockFailedResponse);
    const mockFetchPromise = Promise.resolve(mockJsonPromise);
    // @ts-ignore
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    // @ts-ignore
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    try {
      await fetchJSON(API_ROUTES.LOGIN, { method: 'POST' });
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  it('fetch data with abort', async () => {
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve(mockJsonPromise);
    // @ts-ignore
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    // @ts-ignore
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    const result = await fetchJSONWithAbort(API_ROUTES.LOGIN, {
      method: 'POST',
    });
    expect(JSON.stringify(result)).toBe(JSON.stringify(abortResponse));
  });
});
