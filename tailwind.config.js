/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#0F1624",
				neutral: "#928A97",
				"primary-blue": "#11BADF",
				"primary-purple": "#AE02FF",
			},
			backgroundImage: {
				"hero-pattern": "url('/img/hero-pattern.jpeg')",
			},
		},
	},
	plugins: [],
};
