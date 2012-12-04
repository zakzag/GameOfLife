/**
 *
 */
console.info("Life.Renderable loaded.");
(function(E) {
	Ext.define("Life.Renderable", {

		canvas: undefined,

		render: function() {
			return true;
		},

		setCanvas: function(value) {
			this.canvas = value
		},

		getCanvas: function() {
			return this.canvas;
		}

	});
})(Ext)
