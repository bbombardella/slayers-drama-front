import {ProviderEnum} from "./provider.enum";

export class AuthRequest<T extends AuthPayload> {
  provider: ProviderEnum;
  payload: T;

  constructor(provider: ProviderEnum, payload: T) {
    this.provider = provider;
    this.payload = payload;
  }
}

export type AuthPayload = BearerPayload | UsernamePayload;

export class BearerPayload {
  token: string;

  constructor(token: string) {
    this.token = token;
  }
}

export class UsernamePayload {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
