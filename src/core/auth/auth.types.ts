export default interface IAccessTokenUserInfo {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

export default interface IAccessTokenInfo {
  user: IAccessTokenUserInfo;
  exp: number;
}
