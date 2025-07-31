import { z } from "zod";

const baseSchema = z.object({
  DATABASE_URL: z.string().optional(),

  DATABASE_TYPE: z.string().optional(),
  DATABASE_HOST: z.string().optional(),
  DATABASE_PORT: z.coerce.number().int().optional(),
  DATABASE_PASSWORD: z.string().optional(),
  DATABASE_NAME: z.string().optional(),
  DATABASE_USERNAME: z.string().optional(),

  DATABASE_SYNCHRONIZE: z.coerce.boolean().optional(),
  DATABASE_MAX_CONNECTIONS: z.coerce.number().int().optional(),
  DATABASE_SSL_ENABLED: z.coerce.boolean().optional(),
  DATABASE_REJECT_UNAUTHORIZED: z.coerce.boolean().optional(),

  DATABASE_CA: z.string().optional(),
  DATABASE_KEY: z.string().optional(),
  DATABASE_CERT: z.string().optional(),
});

export const databaseEnvironmentVariablesSchema = baseSchema.superRefine(
  (env, ctx) => {
    const hasDatabaseUrl = !!env.DATABASE_URL;

    const requiredIfNoUrl = [
      "DATABASE_TYPE",
      "DATABASE_HOST",
      "DATABASE_PORT",
      "DATABASE_PASSWORD",
      "DATABASE_NAME",
      "DATABASE_USERNAME",
    ];

    if (!hasDatabaseUrl) {
      for (const key of requiredIfNoUrl) {
        if (env[key as keyof typeof env] === undefined) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: [key],
            message: `${key} is required when DATABASE_URL is not provided`,
          });
        }
      }
    }
  },
);
