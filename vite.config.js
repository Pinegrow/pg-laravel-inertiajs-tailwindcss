import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import { liveDesigner } from "@pinegrow/vite-plugin";

export default defineConfig({
    plugins: [
        liveDesigner({
            devServerUrls: {
                local: "http://127.0.0.1:8000/",
            },
            dirs: {
                src: "resources/js/",
                layouts: "resources/js/Layouts",
                pages: "resources/js/Pages",
                components: "resources/js/Components",
            },
            tailwindcss: {
                /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
                configPath: "tailwind.config.js",
                cssPath: "resources/css/app.css",
                // themePath: false, // Set to false so that Design Panel is not used
                // restartOnConfigUpdate: true,
                // restartOnThemeUpdate: true,
            },
            //...
        }),
        laravel({
            input: "resources/js/app.js",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
