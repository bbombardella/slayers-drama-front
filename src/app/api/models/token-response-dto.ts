/* tslint:disable */
/* eslint-disable */
import {UserEntity} from '../models/user-entity';

export interface TokenResponseDto {
  access_token: string;
  refresh_token: string;
  user: UserEntity;
}
