/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'avatars.githubusercontent.com',
              port: '',
            },
            {
                protocol:'https',
                hostname:'cloudflare-ipfs.com',
                port:'',
            }
          ],
        },
    }

module.exports = nextConfig
