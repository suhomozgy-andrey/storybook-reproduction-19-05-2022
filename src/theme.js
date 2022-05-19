const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	presets: [defaultTheme],
	prefix: "tw-",
	theme: {
		extend: {
			colors: {
				utility: {
					main: "transparent",
					lightest: "#ffffff",
					darkest: "#000000"
				},
				ink: {
					main: "#222222",
					lightest: "#9199ab",
					light: "#636c81",
					dark: "#454c5b"
				},
				primary: {
					main: "#2667ff",
					lightest: "#e9efff",
					light: "#a8c2ff",
					dark: "#1a48b2",
					darkest: "#0b1e4c",
					text: "#3f4657"
				},
				purple: {
					main: "#9c6ade",
					lightest: "#f6f0fd",
					light: "#e3d0ff",
					dark: "#50248f",
					darkest: "#230051",
					text: "#50495a"
				},
				roseBud: {
					main: "#f8b09c",
					lightest: "#fdefeb",
					light: "#facfc3",
					dark: "#b57362",
					darkest: "#4f2921",
					text: "#57433f"
				},
				red: {
					main: "#ff5252",
					lightest: "#ffebeb",
					light: "#ffb3b3",
					dark: "#db3030",
					darkest: "#a61919",
					text: "#573f3f"
				},
				green: {
					main: "#25ba6d",
					lightest: "#e1f2e9",
					light: "#b3e6cb",
					dark: "#0a964d",
					darkest: "#236944",
					text: "#3e4f46"
				},
				yellow: {
					main: "#f6bf26",
					lightest: "#fff6db",
					light: "#ffe499",
					dark: "#8a6b16",
					darkest: "#574000",
					text: "#594e30"
				},
				orange: {
					main: "#f59342",
					lightest: "#fceadc",
					light: "#ffc08c",
					dark: "#bf6317",
					darkest: "#4a2304",
					text: "#594330"
				},
				sky: {
					main: "#dfe2e8",
					lightest: "#f9fafb",
					light: "#f4f5f8",
					dark: "#c4c9d5",
					darkest: "#a6adbd"
				}
			},
			opacity: {
				4: "0.04",
				8: "0.08",
				12: "0.12",
				24: "0.24",
				48: "0.48",
				80: "0.80",
				92: "0.92",
				96: "0.96"
			},
			boxShadow: () => ({
				6: `0 3px 5px -1px rgba(69, 76, 91, 0.12), 0 1px 18px 0 rgba(69, 76, 91, 0.06), 0 6px 10px 0 rgba(69, 76, 91, 0.04)`,
				8: "0 5px 5px -3px rgba(69, 76, 91, 0.12), 0 3px 14px 2px rgba(69, 76, 91, 0.06), 0 8px 10px 1px rgba(69, 76, 91, 0.04)",
				12: "0 7px 8px -4px rgba(69, 76, 91, 0.12), 0 5px 22px 4px rgba(69, 76, 91, 0.06), 0 12px 17px 2px rgba(69, 76, 91, 0.04)",
				24: "0 11px 15px -7px rgba(69, 76, 91, 0.12), 0 9px 46px 8px rgba(69, 76, 91, 0.06), 0 24px 38px 3px rgba(69, 76, 91, 0.04)"
			}),
			width: {
				switchDotWidth: "20px"
			},
			minWidth: {
				4: "16px",
				6: "24px"
			},
			outlineWidth: {
				1: "1px",
				2: "2px",
				3: "3px"
			},
			ringWidth: {
				1: "1px",
				2: "2px",
				3: "3px"
			},
			borderRadius: {
				none: "0",
				sm: "4px",
				default: "4px",
				lg: "16px"
			},
			transitionProperty: {
				switch: "left box-shadow background-color"
			},
			fontFamily: {
				sans: "'SF Pro Text', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
			}
		}
	}
};
