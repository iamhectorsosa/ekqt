/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    async redirects() {
        return [
            {
                source: "/github",
                destination: "https://github.com/ekqt",
                permanent: true,
            },
            {
                source: "/twitter",
                destination: "https://twitter.com/_ekqt",
                permanent: true,
            },
            {
                source: "/email",
                destination: "mailto:hello@hectorsosa.me",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
