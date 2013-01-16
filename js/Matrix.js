console.info("Life.Matrix loaded.");

(function(E) {
function rangeCheck(value, rangeMin, rangeMax) {
	if ((value < 0) || (value >= rangeMax))
		throw RangeError("value must be between 0 and " + this.colCount + "(" + value + ")");
}

function canvasCheck() {
	if (typeof this.canvas == "undefined") {
		throw ReferenceError("Canvas is not defined");
	}
}

Ext.define("Life.Matrix", {

	requires: [
		"Life.DrawingStyle"
	],

	mixins: {
		renderable: "Life.Renderable",
		hasStyle: "Life.HasStyle",
		hasPosition: "Life.HasPosition"
	},

	config: {
		colCount: 30,
		rowCount: 30,
		cellWidth: 10,
		cellHeight: 10,
		position: {
			x: 0.5,
			y: 0.5
		},

		width: undefined,
		height: undefined,

		cellStyle: new Life.DrawingStyle({
			strokeStyle: "#eeeeee",
			fillStyle: "#ff6fff"
		}),

		emptyStyle: new Life.DrawingStyle({
			strokeStyle: "#eeeeee",
			fillStyle: "#ffffff"
		})
	},

	cell: undefined,

	constructor: function(config) {
		this.initConfig(config);

		this.cell = [];

		for(var i = 0; i < this.colCount; i++) {
			this.cell[i] = [];
			for(var j = 0; j < this.rowCount; j++) {
				this.cell[i][j] = STATE_LOW;
			}
		}

		this.width = this.colCount * this.cellWidth;
		this.height = this.rowCount * this.cellHeight;

		return this;
	},

	/**
	 * Iterates through all the cells, and calls the callback function
	 * on each cell. the value of the current cell will be set to the
	 * return value of the callback function.
	 *
	 * @param {function} callback        callback function to call
	 *       params are:
	 *         @param {number} x       column number of the current cell
	 *         @param {number} y       row number of the current cell
	 *         @param {mixed}  value   value of the current cell
	 */
	eachCell: function(callback) {
		for(var i = 0; i < this.colCount; i++) {
			for(var j = 0; j < this.rowCount; j++) {
				var currentValue = this.getCell(i, j);
				this.setCell.call(this, i, j, callback.call(this, i, j, currentValue));
			}
		}

		return this;
	},

	clear: function(forceRender) {
		var forceRender = forceRender || false;

		this.eachCell(function(x, y, value) {
			return STATE_LOW;
		});

		if(forceRender) {
			this.render();
		}

		return this;
	},

	setCell: function(x, y, state) {
		if (state !== undefined) {
			this.cell[x][y] = state;
		}

		return this;
	},

	getCell: function(x, y) {
		return this.cell[x][y];
	},

	render: function() {
		this.mixins.renderable.render.call(this);

		var t1,t2,
			pos = this.position,
			canvas = this.canvas,
			ctx = this.canvas.getContext(),
			sx = this.position.x,
			sy = this.position.y,
			cw = this.cellWidth,
			ch = this.cellHeight;

		t1 = new Date();

		canvas.clear();
		canvas.applyStyle(this.cellStyle);

		this.eachCell(function(x, y, value) {
			ctx.fillStyle = (value == STATE_HIGH ? this.cellStyle.fillStyle : this.emptyStyle.fillStyle);
			ctx.fillRect(sx + x* cw, sy + y * ch, cw, ch);
		});

		t2 = new Date();
		return t2 - t1;
	},

	renderCell: function(x, y) {
		var pos = this.position,
			value = this.getCell(x, y),
			ctx = this.canvas.getContext(),
			cw = this.cellWidth,
			ch = this.cellHeight,
			cellPosX = pos.x + x * cw,
			cellPosY = pos.y + y * ch;

		this.canvas.applyStyle(value == STATE_HIGH ? this.cellStyle: this.emptyStyle)
		ctx.fillRect(cellPosX, cellPosY, cw, ch);

		return this;
	},

	neighboursCount: function(x, y, xp1, xm1, yp1, ym1) {
		return  this.getCell(xm1, ym1 ) + this.getCell(x, ym1 ) + this.getCell(xp1, ym1) +
				this.getCell(xm1, y )  + this.getCell(xp1, y) +
				this.getCell(xm1, yp1 ) + this.getCell(x, yp1 ) + this.getCell(xp1, yp1);

	},

	getLeft: function(x) {
		return x <= 0 ? this.colCount - 1 : x - 1;
	},

	getRight: function(x) {
		return x >= this.colCount - 1 ? 0 : x + 1;
	},

	getTop: function(y) {
		return y <= 0 ? this.rowCount - 1 : y - 1;
	},

	getBottom: function(y) {
		return y >= this.rowCount - 1 ? 0 : y + 1;
	},

	toString: function() {
		var result = "";

		this.eachCell(function(x,y, value) {
			result += '[' + this.getCell(x,y ) + ']' + (y == this.colCount -1 ? "\n":"");
		});

		return result;
	}
});
})(Ext)