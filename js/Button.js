/*
 * Button component represents a button in a toolbar
 * Button has different kind of behaviours:
 * - normal button using click event
 * - stateful button, each state has its own picture
 * - two-state button, on/off
 * - can be grouped, like radio buttons
 */
console.info("Life.Button loaded.");


(function(E) {
	E.define("Life.Button", {

		mixins: {
			renderable: "Life.Renderable",
			hasPosition: "Life.HasPosition"
		},

		config: {
			text: ""
		},

		init: function() {

		},

		render: function() {

		}
	});
})(Ext);