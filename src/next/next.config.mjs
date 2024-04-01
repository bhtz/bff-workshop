/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:slug',
                destination: 'https://jsonplaceholder.typicode.com//:slug', // Matched parameters can be used in the destination
            },
        ]
    },
}


export default nextConfig;
