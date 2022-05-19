const path = require("path");

module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		{
			name: "@storybook/preset-scss",
			options: {
				cssLoaderOptions: {
					modules: true
				}
			}
		},
		{
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: require("postcss", {
						extensions: [".scss", ".css"],
						modules: true
					})
				}
			}
		}
	],
	core: {
		builder: "webpack5"
	},
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.scss/,
			use: ["sass-loader", { loader: "postcss-loader" }],
			include: path.resolve(__dirname, "../")
		});
		return config;
	}
};
