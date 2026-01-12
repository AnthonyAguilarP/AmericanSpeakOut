// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@GenericsComponents': '/src/components/AmericanSpeakOut/GenericsComponents',
                '@AmericanSpeakOutStarterComponents': '/src/components/AmericanSpeakOut/AmericanSpeakOutStarter',
                '@Utilities': '/src/utilities',
            }
        }
    }
});
