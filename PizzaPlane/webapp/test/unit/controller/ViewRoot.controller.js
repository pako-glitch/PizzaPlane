/*global QUnit*/

sap.ui.define([
	"PizzaPlane/PizzaPlane/controller/ViewRoot.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewRoot Controller");

	QUnit.test("I should test the ViewRoot controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});