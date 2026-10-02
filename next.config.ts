import type { NextConfig } from "next";

// The site used to be split across separate routes; keep old links working.
const legacyRoutes: Record<string, string> = {
	about: "about",
	skills: "about",
	works: "projects",
	contact: "contact",
};

const nextConfig: NextConfig = {
	reactStrictMode: true,
	async redirects() {
		return Object.entries(legacyRoutes).map(([route, section]) => ({
			source: `/${route}`,
			destination: `/#${section}`,
			permanent: true,
		}));
	},
};

export default nextConfig;
