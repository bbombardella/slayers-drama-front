import {ProviderEnum} from "./provider.enum";

export class AuthRequest<T extends AuthPayload> {
  provider: ProviderEnum;
  payload: T;
  redirect: boolean;

  constructor(provider: ProviderEnum, payload: T, redirect: boolean = true) {
    this.provider = provider;
    this.payload = payload;
    this.redirect = redirect;
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
