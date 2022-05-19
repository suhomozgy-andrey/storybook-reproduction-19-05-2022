module.exports = {
	presets: [require("./src/theme.js")],
	corePlugins: {
		preflight: false
	},
	content: ["./src/**/*.{tsx,jsx}"]
};
