/**
 *
 *
 */
console.info("Life.Benchmark loaded.");

(function(E) {
	E.define("Life.Benchmark", {

		requires: [
			"Life.Matrix",
			"Life.UInt8Matrix"
		],

		constructor: function(config) {
			console.info("config",config);
		},

		run: function() {

		}
	});
})(Ext);