import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
  js.configs.recommended,
  {
    plugins: {
      stylistic,
    },
    rules: {
      ...stylistic.configs.recommended.rules,
    },
    languageOptions: {
      globals: {
        console: 'readonly',
      },
    },
  },
]