/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'old-images.hb.ru-msk.vkcs.cloud',
				port: ''
			},
			{
				protocol: 'http',
				hostname: 'cdn-bucket.hb.bizmrg.com',
				port: ''
			}
		]
	}
};

export default nextConfig;
