import { z } from "zod";
import { nodeEnv } from "@scepter/utilities";

export const environmentVariablesSchema = z.object({
  NODE_ENV: z.enum([nodeEnv.test, nodeEnv.development, nodeEnv.production]),
  BACKEND_PORT: z.string().transform(Number),
  GLOBAL_PREFIX: z.string(),
  BODY_LIMIT: z.string(),
});
