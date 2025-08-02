/** @type {import('next').NextConfig} */
const nextConfig = {

       async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_BASE}/:path*`,
            },
        ];
    },

           
        allowedDevOrigins: ["http://localhost:3000", "http://127.0.0.1:3000"],
        reactStrictMode: true,
      
     
        async redirects() {
    return [
      {
        source: '/',
        destination: '/blog',
        permanent: false,
      },
    ];
  },

    
};

export default nextConfig;
