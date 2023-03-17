export default {
	typescript: {
		strict: true,
	},
	modules: ["@nuxtjs/tailwindcss"],
	css: ["@/assets/styles/tailwind.scss"],
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
};
