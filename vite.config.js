import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Standard root base
  optimizeDeps: { 
    include: [
      'firebase/app',
      'firebase/auth',
      'firebase/firestore',
    ],
  },
});
