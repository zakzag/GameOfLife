/**
 *
 *
 */
console.info("Life.Game loaded.");

(function(E) {
	function _run() {
		var t1 = new Date,
			renderTime = this.currentMatrix.render(),
			nextTime = this.next();
		this.toggleMatrix();
		if (this.interval) {
			clearInterval(this.interval);
			this.interval = setTimeout(_run.bind(this),0);
		}
		var t2 = new Date;
		console.info("render", renderTime, "next:", nextTime, "all", t2-t1);
	}

	function onBtnRunStopClick() {
		console.info("startstop");
		if (this.interval) {
			clearInterval(this.interval)
			this.interval = undefined;
			this.buttons['run'].el.dom.innerHTML = 'Run'
		} else {
			this.interval = setTimeout(_run.bind(this),0);
			this.buttons['run'].el.dom.innerHTML = 'Stop'
			window.buttons = this.buttons;
		}
	}

	function onBtnNextClick() {
		this.currentMatrix.render();
		this.next();
		this.toggleMatrix();
	}

	function onBtnRandomClick() {
		console.info("rendom");
		this.randomize();

		this.currentMatrix.render();
	}

	function onBtnClearClick() {
		console.info("clear all");
		this.currentMatrix.clear().render();
		this.previousMatrix.clear();
	}

	function onCanvasClick(ev) {
		var cursorPos = getCursorPos.call(this, ev);
		var mPos = getMCoord.call(this, cursorPos.x, cursorPos.y);

		if (mPos.x, mPos.y) {
			this.currentMatrix.setCell(
				mPos.x,
				mPos.y,
				this.currentMatrix.getCell(mPos.x,mPos.y) == STATE_HIGH ? STATE_LOW : STATE_HIGH
			);
			this.currentMatrix.renderCell(mPos.x, mPos.y);
		}
	}

	function getCursorPos(ev) {
		var canvasPos = Ext.fly(this.canvas.getDom()).getXY();

		return {
			x: ev.browserEvent.clientX - canvasPos[0],
			y: ev.browserEvent.clientY - canvasPos[1]
		};
	}

	function getMCoord(x, y) {
		var cm = this.currentMatrix,
			matrixPos = cm.position,
			mxPos = parseInt((x - matrixPos.x) / cm.cellWidth),
			myPos = parseInt((y - matrixPos.y) / cm.cellHeight)

		console.info("pos:",mxPos, myPos)

		return {
			x: ((mxPos >= 0) && (mxPos < cm.colCount)) ? mxPos : undefined,
			y: ((myPos >= 0) && (myPos < cm.rowCount)) ? myPos : undefined
		}
	}

	E.define("Life.Game", {

		requires: ["Life.Matrix"],
		matrix1: undefined,
		matrix2: undefined,

		currentMatrix: undefined,
		previousMatrix: undefined,

		canvas: undefined,

		xp1: [],
		yp1: [],
		xm1: [],
		ym1: [],

		buttons: {
			run: {
				id: 'btnRunStop',
				handler: onBtnRunStopClick
			},
			next: {
				id: 'btnNext',
				handler: onBtnNextClick
			},
			random: {
				id: 'btnRandom',
				handler: onBtnRandomClick
			},
			clear: {
				id: 'btnClear',
				handler: onBtnClearClick
			}
		},
		config: {
			cols: 32,
			rows: 32,
			cellWidth: 4,
			cellHeight: 4,
			canDraw: true
		},

		constructor: function(config) {
			window.game = this;
			this.initConfig(config);
			var me = this;

			this.canvas = new Life.Canvas({
				width: this.cols * this.cellWidth + 2,
				height: this.rows * this.cellHeight + 2
			});

			(this.matrix1 = new Life.UInt8Matrix({
				colCount: this.cols,
				rowCount: this.rows,
				cellWidth: this.cellWidth,
				cellHeight: this.cellHeight

			})).setCanvas(this.canvas);

			(this.matrix2 = new Life.UInt8Matrix({
				colCount: this.cols,
				rowCount: this.rows,
				cellWidth: this.cellWidth,
				cellHeight: this.cellHeight
			})).setCanvas(this.canvas);

			this.currentMatrix = this.matrix1;
			this.previousMatrix = this.matrix2;

			for (var buttonId in this.buttons) {
				var button = this.buttons[buttonId];
				this.buttons[buttonId].el = E.get(button.id);
				button.el.on("click", button.handler.bind(this));
			}

			if (this.canDraw) {
				E.get(this.canvas.getDom()).on('click', onCanvasClick.bind(this));
			}
		},

		run: function() {
			this.interval = setInterval(_run.bind(this),100);
		},

		next: function() {
			var t1 = new Date,
				t2,
				cm = this.currentMatrix,
				pm = this.previousMatrix,
				xm1, ym1, xp1, yp1, nbCount, me = this;
			//console.info(cm.toString());

			for (var x = 0, xmax = cm.colCount; x < xmax; x++) {
				xm1 = cm.getLeft(x);
				xp1 = cm.getRight(x);

				for (var y = 0, ymax = cm.rowCount; y < ymax; y++) {
					ym1 = cm.getTop(y);
					yp1 = cm.getBottom(y);

					nbCount = cm.neighboursCount(x,y, xp1, xm1, yp1, ym1);
//					if(nbCount > 0) {
//						console.info("x:", x, "y:", y, "C:", nbCount, me.isAlive(nbCount, cm.getCell(x, y)));
//					}
					pm.setCell(x,y, me.isAlive(nbCount, cm.getCell(x, y)) ? STATE_HIGH : STATE_LOW);
				}
			}

			var t2 = new Date;
			return t2 - t1;
		},

		isAlive: function(nbCount, value) {
			return nbCount == 3 || (nbCount == 2 && value == STATE_HIGH);
		},

		randomize: function() {
			var me = this;
			console.info("randomize");
			this.currentMatrix.eachCell(function(x, y, value) {
				return Math.random() < .1 ? STATE_HIGH : STATE_LOW;
			});
		},

		toggleMatrix: function() {
			var temp = this.currentMatrix;
			this.currentMatrix = this.previousMatrix;
			this.previousMatrix = temp;
		}
	});
})(Ext)