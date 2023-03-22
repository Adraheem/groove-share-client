/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.tsx"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#DC1E11",
                secondary: "#0A0A0B"
            },
            fontFamily: {
                sans: ["Graphik", "sans-serif"]
            }
        },
    },
    plugins: [],
}
