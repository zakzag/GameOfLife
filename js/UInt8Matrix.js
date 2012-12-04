console.info("Life.UInt8Matrix loaded.");

(function(E) {

E.define("Life.UInt8Matrix", {
	extend: "Life.Matrix",

	requires: [
		"Life.Matrix"
	],

	constructor: function(config) {
		this.initConfig(config);

		var buffer = new ArrayBuffer(this.colCount * this.rowCount);
		this.cell = new Uint8Array(buffer);

		for(var i = 0, len = (this.colCount * this.rowCount) - 1; i < len; i++) {
			this.cell[i] = STATE_LOW;
		}

		this.width = this.colCount * this.cellWidth;
		this.height = this.rowCount * this.cellHeight;

		return this;
	},

	setCell: function(x, y, state) {
		if (state !== undefined) {
			this.cell[x + y * this.colCount] = state;
		}

		return this;
	},

	getCell: function(x, y) {
		return this.cell[x + y * this.colCount];
	}
});
})(Ext)