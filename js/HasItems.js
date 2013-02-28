/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


(function(E) {
	E.define("Life.HasItems", {
		/** @var {Array}  items       contains all items */
		items: {},
		indexIndexes: [],
		index: 0,

		constructor: function(config) {
			this.initConfig(config);
		},

		addItem: function(item) {
			var index = this.index++;
			this.fireEvent("before-add-item", { item: item, context: this });

			this.items[itemId] = {
				index: index,
				item: item,
				itemId: itemId
			};

			this.indexIndexes[index] = this.items[itemId];
			this.fireEvent("add-item", { item: item, context: this });

			return this;
		},

		removeItem: function(itemId) {
			this.fireEvent("before-remove-item", { item: this.items[itemId], context: this });
			// @todo: letezik mar ilyen index?
			var index = this.items[itemId].index;

			delete this.items[itemId];
			delete this.indexIndexes[index];
			this.fireEvent("remove-item", { context: this });

			return this;
		},

		removeItemByName: function() {
			return this.removeItem
		},
				
		removeItemByIndex: function(index) {
			/** @TODO: item letezik? */
			var item = this.indexIndexes[index],
				itemId = item.itemId;

			this.removeItem(itemId);

			return this;
		},

		item: function(itemId) {
			return this.items[itemId]
		},

		itemByIndex: function(index) {
			return this.indexIndexes[index];
		},

		getLength: function() {
			return this.items.length;
		}
	});
})(Ext);