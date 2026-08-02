import { AppConfig } from "./slices/app/app-config.type";
import { DatabaseConfig } from "./slices/database/database-config.type";

export type AllConfigType = {
  app: AppConfig;
  database: DatabaseConfig;
};
