import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    root: "./client",
    outDir: "./dist",
    publicDir: "./client/public",
    srcDir: "./client/src",
    vite: {
        server: {
            fs: {
                allow: ['.'],
            },
            middlewareMode: false,
        },
        plugins: [tailwindcss(), {
            name: 'html-fallback',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    if (req.url && req.url.endsWith('/')) {
                        req.url += 'index.html';
                    }
                    next();
                });
            },
        }
        ],
    },
});
