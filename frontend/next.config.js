// next.config.js
module.exports = {
    reactStrictMode: true,
    webpack(config) {
        // Hacer que Next.js reconozca las páginas en src/pages
        config.resolve.modules.push(__dirname + '/src');
        return config;
    },
};
