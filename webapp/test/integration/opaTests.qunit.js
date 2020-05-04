/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/shunyu/lqp/fiori-test-boeing/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});