// @ts-check
import { config } from "typescript-eslint";
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import baseConfig from "../../eslint.config.js";
import pluginNext from "@next/eslint-plugin-next";

export default config(
  baseConfig,
  {
    plugins: {
      "@next/next": pluginNext,
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      ...pluginNext.configs.recommended.rules,
    },
  },
);

// const eslintConfig = defineConfig([
//   ...nextVitals,
//   {
//     rules: {
//       ...pluginNext.configs.recommended.rules
//     },
//     plugins: {
//       "@next/next": pluginNext
//     },
//     files: ["**/*.ts", "**/*.tsx"]
//   },
//   globalIgnores([
//     '.next/',
//     'out/',
//     'build/',
//     'next.env.d.ts'
//   ])
// ])

// export default eslintConfig