module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'airbnb-base',
  ],
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // 들여쓰기 깊이 제한
    'max-depth': ['error', 2],
    // 함수의 매개변수 개수 제한
    'max-params': ['error', 3],
    // 함수의 길이 제한
    'max-lines-per-function': ['error', { max: 10 }],
  },
};
