/*
 * Toolbar component is responsible for maintaining the toolbar buttons,
 * you can add/remove items from the toolbar
 */
console.info("Life.Canvas loaded.");


(function(E) {
	E.define("Life.Toolbar", {
		requires: ["Life.Button"],

		mixins: {
			renderable: "Life.Renderable",
			hasPosition: "Life.HasPosition"
		},

		config: {
			parentNode: Ext.getBody()
		},

		/** @var {string} content */
		content: "",
		/** @var {Array}  items       contains all items */
		items: [],
		/** @var {Object} namedItems  contains all items indexed by its name */
		namedItems: {},

		constructor: function(config) {
			this.initConfig(config);
		},

		addItem: function(name, item) {
			this.items[name] = item;
		},

		removeItem: function(name) {
			// @todo
			delete this.namedItems[name];
		},


		item: function(index) {
			return (typeof index === 'number') ?
				this.items[index] :
				this.namedItems[index];
		}

		render: function() {
			for (var i)

		}
	});
})(Ext);