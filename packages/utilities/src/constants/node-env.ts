export const nodeEnv = {
  development: "development",
  production: "production",
  test: "test",
} as const;
export type NodeEnv = (typeof nodeEnv)[keyof typeof nodeEnv];
