// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: ['**/*.ts', '**/*.tsx'],
  // extends: ['plugin:vue/recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 'off',
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
});
