sap.ui.define([
	"com/shunyu/lqp/fiori-test-boeing/controller/BaseController"
], function (BaseController) {
	"use strict";
	return BaseController.extend("com.shunyu.lqp.fiori-test-boeing.controller.ReservationDetai", {
		onInit: function () {
			var oRouter = this.getRouter();
			oRouter.getRoute("main").attachPatternMatched(this.onRouteMatched, this);
		},
		onNavBack: function (oEvent) {
			this._navBack("main", {});
		},
		onCheck: function () {
			var oRouter = this.getRouter();
			oRouter.navTo("startTrip", {}, true);
		}

	});
});