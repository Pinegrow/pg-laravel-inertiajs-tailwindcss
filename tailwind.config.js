const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@pinegrow/tailwindcss-plugin").default,
    ],

    /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
    get content() {
        const _content = [
            "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
            "./vendor/laravel/jetstream/**/*.blade.php",
            "./storage/framework/views/*.php",
            "./resources/views/**/*.blade.php",
            "./resources/js/**/*.vue",
        ];
        return process.env.NODE_ENV === "production"
            ? _content
            : [..._content, "./_pginfo/**/*.{html,js}"]; // used by Vue Desginer for live-designing during development
    },

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },
};
