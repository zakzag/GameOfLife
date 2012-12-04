/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
console.info("Life.Application loaded.");

Ext.namespace('Life');
(function(E) {
	E.define('Life.Application', {
		/** @var {Life.Game}      game       game API */
		game: undefined,
		/** @var {Life.Canvas}    canvas     canvas used to display the game */
		canvas: undefined,

		requires: [
			"Life.Game",
			"Life.Matrix"
		],

		/**
		 * Initializes main objects
		 */
		constructor: function(config) {
			this.initConfig(config);

			this.game = new Life.Game({
				cols: 80,
				rows: 80,
				cellWidth: 8,
				cellHeight: 8
			});

			return true;
		},

		/**
		 * Runs the application
		 */
		run: function() {
			console.info("application run.");
		}
	})
})(Ext)