export interface IAuthActions {
  logout: () => void;
  setAccessToken: (accessToken: string) => void;
}
