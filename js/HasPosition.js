/**
 *
 */
console.info("Life.HasPosition loaded.");
(function(E) {
	E.define("Life.HasPosition", {

		position: {
			top: 0,
			left: 0
		},

		getPos: function() {
			return this.position;
		},

		setPosition: function(left, top) {
			this.position = {
				top: x,
				left: y
			}

			console.info(this.container);
		}
	});
})(Ext)
