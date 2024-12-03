import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tseslintParser, // TypeScript 파서를 지정
      globals: globals.browser,
    },
    extends: [
      pluginJs.configs.recommended,
      tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      'plugin:prettier/recommended', // Prettier와 ESLint 충돌 방지
    ],
    rules: {
      'prettier/prettier': 'error', // Prettier 룰 위반 시 오류 표시
    },
  },
];
