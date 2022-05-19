import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import analyze from "rollup-plugin-analyzer";
const path = require("path");
const postcssUrl = require("postcss-url");

import postcss from "rollup-plugin-postcss";

import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

const isAnalyze = process.env.NODE_ENV === "analyze";
const isProduction = process.env.NODE_ENV === "production";

const globals = {
	react: "React",
	"react-dom": "ReactDOM"
};

export default [
	{
		input: "src/index.ts",
		output: [
			{
				format: "es",
				globals,
				sourcemap: false,
				dir: "dist",
				preserveModules: true,
				preserveModulesRoot: "src"
			},
			{
				file: packageJson.main,
				format: "cjs",
				globals
			}
		],
		cache: !isProduction,
		plugins: [
			peerDepsExternal({ includeDependencies: false }),
			resolve(),
			commonjs(),
			typescript({
				exclude: [
					// Exclude test files
					/\.test.((js|jsx|ts|tsx))$/,
					// Exclude story files
					/\.stories.((js|jsx|ts|tsx|mdx))$/
				],
				tsconfig: "./tsconfig.json"
			}),
			postcss({
				extensions: [".scss", ".css"],
				use: {
					scss: {
						javascriptEnabled: true,
						paths: [path.resolve(__dirname, "node_modules")],
						logLevel: 2
					}
				},
				plugins: [
					postcssUrl({
						url: "inline",
						encodeType: "base64"
					})
				],
				modules: true
			}),
			terser(),
			isAnalyze && analyze({ summaryOnly: true })
		]
	},
	{
		input: "src/input.css",
		output: {
			file: "dist/styles.css"
		},
		plugins: [
			postcss({
				extract: true,
				minimize: true
			})
		]
	},
	{
		input: "src/theme.js",
		output: [
			{
				file: "dist/theme.js",
				format: "cjs",
				sourcemap: false
			}
		]
	}
];
