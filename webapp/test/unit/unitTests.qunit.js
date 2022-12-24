/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"multiplicationtable1/multiplicationtableproject/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
