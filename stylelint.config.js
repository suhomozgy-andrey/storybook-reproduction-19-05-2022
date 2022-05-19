module.exports = {
	extends: ["stylelint-config-standard", "stylelint-config-css-modules"],
	rules: {
		indentation: 4,
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"]
			}
		],
		"declaration-block-trailing-semicolon": null,
		"no-descending-specificity": null
	}
};
