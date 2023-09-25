/** @type {import('next').NextConfig} */
// https://i.redd.it/here-see-my-majestic-cat-v0-2kircypylreb1.jpg?s=41db67ac90938a3182f393de512482571862cf3f
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.redd.it',
                port: '',
                pathname: '/**',
            }
        ]
    }
}

module.exports = nextConfig
