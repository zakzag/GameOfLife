/**
 *
 */
console.info("Life.DrawingStyle loaded.");

(function(E) {
	E.define("Life.DrawingStyle", {
		config: {
			fillStyle: "#FFFFFF",    // {color}
			strokeStyle: "#FFFFFF",  // {color}
			lineWidth: 1,            // {number}     0-inf
			lineCap: "square",       // {string}       butt, round, square
			lineJoin: "bevel",       // {string}       bevel, join, miter
			miterLimit: 10,          // {number}
			dashList: undefined,     // {Array}
			lineDashOffset: 0        // {number}
		},

		constructor: function(config) {
			this.initConfig(config);
		}
	});
})(Ext)
