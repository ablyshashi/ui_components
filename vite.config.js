import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'NectrComponents',
            // Enforce the exact naming convention your package.json wants
            formats: ['es', 'cjs'],
            fileName: (format) => `nectr-library.${format}.js`,
        },
        rollupOptions: {
            // Make sure to externalize deps that shouldn't be bundled
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});