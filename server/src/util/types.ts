import { Repository } from "typeorm";
import User from '../entities/User';

export type usersRepoType = Repository<User>;

export interface getUsersFilterType {
  id: number | undefined;
  username: string | undefined;
  email: string | undefined;
};

export interface configCorsType {
  origin: string;
  credentials: boolean;
};

export interface configDatabaseType {
  host: string;
  port: number;
  username: string;
  password: string;
  dbName: string;
};

export interface configServerType {
  port: number;
  hostname: string;
};

export interface configReposType {
  userRepository: usersRepoType | null;
};

export interface configBcryptType {
  salt: number;
}