import {User} from "./user.model";

export class TokenResponse {
  access_token: string;
  refresh_token: string;
  user: User;


  constructor(access_token: string,
              refresh_token: string,
              user: Omit<User, 'password' | 'refreshToken'>) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
    this.user = user;
  }
}
