/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : ["images.pexels.com",
    "i.dummyjson.com"]
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
