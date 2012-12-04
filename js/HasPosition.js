/**
 *
 */
console.info("Life.HasPosition loaded.");
(function(E) {
	E.define("Life.HasPosition", {

		position: {
			x: 0,
			y: 0
		},

		getPos: function() {
			return this.position
		},

		setPosition: function(x, y) {
			this.position = {
				x: x,
				y: y
			}
		}
	});
})(Ext)
