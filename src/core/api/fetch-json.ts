import { FetchError } from './fetch-error';
import { IAbortableFetch } from './api.constants';
import authService from '../pages/Login/auth/auth.service';

const getRequestConfig = (
  init?: RequestInit,
  requireAuthentication = true,
  signal?: AbortSignal
) => {
  const requestConfig = {
    ...init,
    signal,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (requireAuthentication) {
    //@ts-ignore
    requestConfig.headers.Authorization = `Token ${authService.getAccessToken()}`;
  }

  return requestConfig;
};

export const fetchJSON = async (
  input: RequestInfo,
  init?: RequestInit,
  requireAuthentication = true,
  signal?: AbortSignal
) => {
  const response: any = await fetch(
    input,
    getRequestConfig(init, requireAuthentication, signal)
  );

  const isJSONResponse =
    response.headers.get('Content-Type').indexOf('application/json') !== -1;
  let responseData = response.statusText;

  if (isJSONResponse) {
    responseData = await response.json();
  }

  if (response.status !== 200) {
    // @ts-ignore
    throw new FetchError(responseData.message || responseData, responseData);
  }
  return responseData;
};

/**
 * Fetch request with abort capabilities.
 * ex:
 *  const myFetchRequest = fetchJSONWithAbort(input, init, requireAuthentication);
 *
 *  // To get the response:
 *  const response = await myFetchRequest.request;
 *
 *  // To abort the request and throw an AbortError:
 *  myFetchRequest.abortCtrl.abort();
 *
 * @param input
 * @param init
 * @param requireAuthentication
 */

export const fetchJSONWithAbort = (
  input: RequestInfo,
  init?: RequestInit,
  requireAuthentication = true
): IAbortableFetch => {
  const abortCtrl = new AbortController();

  return {
    abortCtrl,
    request: fetchJSON(input, init, requireAuthentication, abortCtrl.signal),
  };
};
