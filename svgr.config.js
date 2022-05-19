module.exports = {
	svgoConfig: {
		plugins: [
			{
				name: "removeViewBox",
				active: false
			},
			{
				name: "addAttributesToSVGElement",
				params: {
					attributes: [{ fill: "currentColor" }]
				}
			}
		]
	}
};
