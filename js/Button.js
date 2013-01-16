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
			renderable: "Life.Renderable"
		},

		config: {
			parentNode: Ext.getBody()
		},

		/** @var {string} content */
		content: "",
		/** @var {Array}  items       contains all items */
		/** @var {string} */
		nodeType: 'div',
		/** @var {string} */
		defaultClass: 'life-toolbar',
		/** @var {string} */
		id: undefined,

		constructor: function(config) {
			this.initConfig(config);
		},

		addItem: function(name, item) {
			this.items.push(item);
			this.namedItems[name] = item;
		},

		removeItem: function(name) {
			delete this.items[name];
		},

		item: function(index) {
			return (typeof index === 'number') ?
				this.items[index] :
				this.nameditems[index];
		},

		render: function() {


		}
	});
})(Ext);