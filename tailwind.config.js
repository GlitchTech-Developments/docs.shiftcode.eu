/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	// darkMode: ["class", '[data-theme="dark"]'],
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	theme: {
		extend: {
			colors: {
				accentAlt: "#271d3b",
				accentAltDark: "#291f29",
			},
			// fontFamily: {
			// 	sans: ["var(--font-sans)", ...fontFamily.sans]
			// },
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	daisyui: {
		themes: [
			{
				shiftcode: {
					primary: "#d9d9d9",
					secondary: "#33c094",
					accent: "#8b5cf6",
					neutral: "#110E0E",
					"base-100": "#171212",
					info: "#3ABFF8",
					success: "#36D399",
					warning: "#FBBD23",
					error: "#F87272",
				},
			},
		],
	},
	plugins: [
		require("daisyui"),
		require("tailwindcss-animate"),
		require("tailwind-scrollbar")({ nocompatible: true }),
	],
};
