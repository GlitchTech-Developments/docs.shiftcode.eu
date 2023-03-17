export default {
	typescript: {
		strict: true,
	},
	modules: ["@nuxtjs/tailwindcss"],
	css: ["@/assets/css/tailwind.css"],
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
