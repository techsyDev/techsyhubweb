/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:4000/:path*",
        permanent: true,
      },
    ];
  },
};
