/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'old-images.hb.ru-msk.vkcs.cloud',
				port: ''
			}
		]
	}
};

export default nextConfig;
