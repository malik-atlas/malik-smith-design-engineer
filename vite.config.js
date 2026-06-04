import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Import the new plugin

export default defineConfig({
  base: '/', // Ensure this matches your deployment intent
  plugins: [
    react(),
    tailwindcss(), // Add it here
  ],
});


