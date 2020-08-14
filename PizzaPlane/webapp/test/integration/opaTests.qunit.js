/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"PizzaPlane/PizzaPlane/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});