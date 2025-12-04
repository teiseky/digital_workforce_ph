import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Using Vite's built-in JSX transform instead of Babel
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  plugins: [],
})
