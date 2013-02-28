/*
 * Toolbar component is responsible for maintaining the toolbar buttons,
 * you can add/remove items from the toolbar
 */
console.info("Life.Toolbar loaded.");


(function(E) {
	E.define("Life.Toolbar", {
		requires: ["Life.Button"],

		mixins: {
			renderable: "Life.Renderable",
			hasPosition: "Life.HasPosition",
			hasItems: "Life.HasItems"
		},

		/** @var {string} content */
		content: "",
		
		render: function() {
			for (var i = 0, len = this.getLength(); i < len; i++) {
				var item = this.item(i),
					node = item.render();

				this.container//add element nodes just generated
			}
		}
	});
})(Ext);