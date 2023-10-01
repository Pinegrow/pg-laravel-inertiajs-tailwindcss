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
