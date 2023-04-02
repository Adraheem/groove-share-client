export interface ISignupRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ITokenResponse {
  token: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  username?: string;
  emailAddress: string;
}