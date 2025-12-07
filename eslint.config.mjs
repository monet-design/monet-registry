import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  // Registry 컴포넌트에 대한 규칙 완화
  {
    files: ['src/components/registry/**/*'],
    rules: {
      'react/display-name': 'off',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-page-custom-font': 'off',
      'prefer-const': 'off',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  // Sections 컴포넌트에 대한 규칙 완화
  {
    files: ['src/components/sections/**/*'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
    },
  },
  // Example 페이지에 대한 규칙 완화
  {
    files: ['src/app/example/**/*', 'src/app/live-preview/**/*', 'src/app/page-live-preview/**/*'],
    rules: {
      'react/display-name': 'off',
    },
  },
];

export default eslintConfig;
