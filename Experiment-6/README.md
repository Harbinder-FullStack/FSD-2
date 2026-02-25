# MUI Login Form Testing (Vite + Vitest)

## Install Testing Dependencies

npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom

## Update vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true
  }
})

## Run Tests

npx vitest
OR
npx vitest run

## Coverage

npx vitest run --coverage
