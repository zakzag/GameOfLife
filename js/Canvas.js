/*
 * Canvas Class represents a html canvas with extended functionality intended for this Game
 *
 * configs:
 *     {Canvas}   canvas       if you want to use an existing canvas instead of creating a new one
 *     {renderTo} appendTo     applied only when a newly created canvas is used. Defines the Element
 *                             where it will be appended to.
 *
 */
console.info("Life.Canvas loaded.");


(function(E) {
	E.define("Life.Canvas", {
		requires: ["Life.DrawingStyle"],

		config: {
			width: 320,
			height: 240
		},

		/** @var {RenderingContext2D} context        the context where rendering operates */
		context: undefined,
		/** @var {Life.DrawingStyle}  defaultStyle   default draing style */
		defaultStyle: new Life.DrawingStyle({
			fillStyle: "black",
			stroksStyle: 'white'
		}),

		constructor: function(config) {
			var config = config || {}
			this.initConfig(config)

			this.canvasEl = config.canvas || document.createElement("canvas");
			var appendTo = config.appendTo || Ext.getBody();

			this.canvasEl.width = this.width;
			this.canvasEl.height = this.height;

			appendTo.appendChild(this.canvasEl);
			this.context = this.canvasEl.getContext('2d');

			this.clear();
		},

		/**
		 * Returns the canvas DOM element
		 */
		getDom: function() {
			return this.canvasEl;
		},

		/**
		 * Draws a line on the canvas using context
		 *
		 * @param {number} x1     horizontal part of starting position
		 * @param {number} y1     vertical part of starting position
		 * @param {number} x2     horizontal part of ending position
		 * @param {number} y2     vertical part of ending position
		 *
		 * @return this
		 */
		line: function(x1, y1, x2, y2, style) {
			if (style) {
				this.applyStyle(style);
			};

			this.context.moveTo(x1, y1);
			this.context.lineTo(x2, y2);
		},

		/**
		 * Applies a style to the rendering context
		 *
		 * @TODO: kitalalni valami jobbat
		 */
		applyStyle: function(style) {
			var ctx = this.context;
//			console.info("new style applied:", style);

			ctx.fillStyle = style.fillStyle;
			ctx.strokeStyle = style.strokeStyle;
			ctx.lineWidth = style.lineWidth;
			ctx.lineCap = style.lineCap;
			ctx.lineJoin= style.lineJoin;
			ctx.miterLimit = style.miterLimit;
			//ctx.dashList: undefined,
			ctx.lineDashOffset = style.lineDashOffset;
		},

		getContext: function() {
			return this.context;
		},

		clear: function() {
			this.canvasEl.width = this.canvasEl.width;
		},

		/**
		 * Renders the object calling its render function
		 */
		render: function(object) {
			/*DEBUG*/
			if (object.canvas instanceof Life.Canvas) {
				var originalCanvas = object.canvas
			}
			/*ENDDEBUG*/
		}
	});
})(Ext)