/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm)$/, // Match video file extensions
        use: ['file-loader'],
      });
      return config;
    },
};

export default nextConfig;
