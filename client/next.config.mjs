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
