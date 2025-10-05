import { registerAs } from "@nestjs/config";
import { AppConfig } from "src/config/app-config.type";
import { environmentVariablesSchema } from "src/config/app-config.schema";

export default registerAs<AppConfig>("app", () => {
  const parsedEnvironmentVariables = environmentVariablesSchema.parse(
    process.env,
  );

  return {
    nodeEnv: parsedEnvironmentVariables.NODE_ENV,
    backendPort: parsedEnvironmentVariables.BACKEND_PORT,
    bodyLimit: parsedEnvironmentVariables.BODY_LIMIT,
    globalPrefix: parsedEnvironmentVariables.GLOBAL_PREFIX,
  };
});
