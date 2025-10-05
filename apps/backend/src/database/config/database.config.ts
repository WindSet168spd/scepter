import { registerAs } from "@nestjs/config";
import { databaseEnvironmentVariablesSchema } from "src/database/config/database-config.schema";
import { DatabaseConfig } from "src/database/config/database-config.type";

export default registerAs<DatabaseConfig>("database", () => {
  const parsedDatabaseEnvironmentVariables =
    databaseEnvironmentVariablesSchema.parse(process.env);

  return {
    url: parsedDatabaseEnvironmentVariables.DATABASE_URL,
    type: parsedDatabaseEnvironmentVariables.DATABASE_TYPE,
    host: parsedDatabaseEnvironmentVariables.DATABASE_HOST,
    port: parsedDatabaseEnvironmentVariables.DATABASE_PORT ?? 5432,
    password: parsedDatabaseEnvironmentVariables.DATABASE_PASSWORD,
    name: parsedDatabaseEnvironmentVariables.DATABASE_NAME,
    username: parsedDatabaseEnvironmentVariables.DATABASE_USERNAME,
    synchronize:
      parsedDatabaseEnvironmentVariables.DATABASE_SYNCHRONIZE === "true",
    maxConnections:
      parsedDatabaseEnvironmentVariables.DATABASE_MAX_CONNECTIONS ?? 100,
    sslEnabled:
      parsedDatabaseEnvironmentVariables.DATABASE_SSL_ENABLED === "true",
    rejectUnauthorized:
      parsedDatabaseEnvironmentVariables.DATABASE_REJECT_UNAUTHORIZED ===
      "true",
    ca: parsedDatabaseEnvironmentVariables.DATABASE_CA,
    key: parsedDatabaseEnvironmentVariables.DATABASE_KEY,
    cert: parsedDatabaseEnvironmentVariables.DATABASE_CERT,
  };
});
