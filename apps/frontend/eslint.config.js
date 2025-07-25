// @ts-check
import tseslint from 'typescript-eslint'
import baseConfig from '../../eslint.config.js'
import pluginNext from '@next/eslint-plugin-next'

export default tseslint.config(
  baseConfig,
  {
    plugins: {
      '@next/next': pluginNext,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...pluginNext.configs.recommended.rules
    }
  }
);
