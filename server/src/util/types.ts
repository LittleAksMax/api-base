
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
