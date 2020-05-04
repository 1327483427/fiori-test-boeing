sap.ui.define([
	"com/shunyu/lqp/fiori-test-boeing/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.shunyu.lqp.fiori-test-boeing.controller.Main", {
		onInit: function () {
			var oRouter = this.getRouter();
			oRouter.getRoute("main").attachPatternMatched(this.onRouteMatched, this);
		},
		
		handleNavigation:function(){
			var oRouter = this.getRouter();
			oRouter.navTo("reservationDetail", {}, true);
		}
	});
});