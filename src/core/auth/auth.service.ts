import { ACCESS_TOKEN_KEY } from './auth.constants';
import {API_ROUTES, fetchJSON} from "../api";

const setAccessToken = (accesToken: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accesToken);
};

const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

const getAccessTokenInfo = (): string | null => {
  const currentAccessToken = getAccessToken();

  if (!currentAccessToken) {
    return null;
  }

  return currentAccessToken;
};

const isLoggedInUser = (): boolean => {
  return !!getAccessTokenInfo();
};

const signIn = async (username: string, password: string) => {
  let responseData: any = await fetchJSON(
    API_ROUTES.LOGIN,
    {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    },
    false
  );
  setAccessToken(responseData.token);
  return responseData;
};

export const getUserProfileFromToken = () => {
  const user = fetchJSON(API_ROUTES.USER);
  localStorage.setItem('user', JSON.stringify(user));
  return user;
};

const fetchUserProfile = () => {
  return fetchJSON(API_ROUTES.LOGIN);
};

const signOut = () => {
  removeAccessToken();
};

const authService = {
  getAccessToken,
  getUserProfileFromToken,
  isLoggedInUser,
  signIn,
  signOut,
  fetchUserProfile,
};

export default authService;
