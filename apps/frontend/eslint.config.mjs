// @ts-check
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import pluginNext from "@next/eslint-plugin-next";
import nextTs from "eslint-config-next/typescript"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      ...pluginNext.configs.recommended.rules
    },
    // files: ["**/*.ts", "**/*.tsx"]
  },
  globalIgnores([
    '.next/',
    'out/',
    'build/',
    'next.env.d.ts'
  ])
])

export default eslintConfig