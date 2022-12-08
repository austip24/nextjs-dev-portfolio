const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", ...fontFamily.sans],
			},
			colors: {
				background: "#0F1624",
				neutral: "#928A97",
				"primary-blue": "#11BADF",
				"primary-purple": "#AE02FF",
			},
			backgroundImage: {
				hero: "url('/hero-bg.png')",
				"hero-sm": "url('/hero-bg-sm.png')",
			},
			spacing: {
				"navigation-height": "var(--navigation-height)",
				"footer-height": "var(--footer-height)",
			},
		},
	},
	plugins: [],
};
