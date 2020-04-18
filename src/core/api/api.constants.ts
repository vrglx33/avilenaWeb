export const FETCH_STATUS: { [key: string]: string } = {
  ALLOWED: 'ALLOWED',
  ERROR: 'ERROR',
  NOT_FOUND: 'NOT_FOUND',
  PERMISSION_DENIED: 'PERMISSION_DENIED',
  UNKNOWN: 'UNKNOWN',
};

export const API_ROUTES = {
  ALL_ROUTE: '*',
  LOGIN: '/api/login',
  USER: '/api/user',
};

export interface IAbortableFetch {
  abortCtrl: AbortController;
  request: Promise<Response>;
}
