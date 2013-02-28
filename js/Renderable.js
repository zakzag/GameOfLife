/**
 *
 */
console.info("Life.Renderable loaded.");
(function(E) {
	E.define("Life.Renderable", {
		render: function() {
			return this;
		},

		/**
		 * @description container of the component.
		 * @name container
		 * @type {Object}
		 */
		container: null,

		setContainer: function(value) {
			if (this.container != value) {
				/** @TODO: attach to the container */
				this.container = value;
			}
		},

		getContainer: function() {
			return this.container;
		}
	});
})(Ext)
