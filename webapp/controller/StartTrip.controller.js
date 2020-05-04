sap.ui.define([
	"com/shunyu/lqp/fiori-test-boeing/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment"
], function (BaseController, JSONModel, Fragment) {
	"use strict";

	return BaseController.extend("com.shunyu.lqp.fiori-test-boeing.controller.StartTrip", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.shunyu.lqp.fiori-test-boeing.view.StartTrip
		 */
		onInit: function () {
			var oRouter = this.getRouter();
			oRouter.getRoute("startTrip").attachPatternMatched(this.onSetJsonModel, this);

			this.oPageJsonModel = new JSONModel();
			this.oPageJsonModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
			this.getView().setModel(this.oPageJsonModel, "page");
		},

		onNavBack: function (oEvent) {
			this._navBack("reservationDetail", {});
		},

		onSetJsonModel: function () {
			var oPageMockJsonData = {
				"reservationDetails": {
					"gasUsed": "29.8L",
					"distance": "239KM",
					"during": "8h35m",
					"status": "Active"
				},
				"checkinButtonEnabled": false
			};
			this.oPageJsonModel.setData(oPageMockJsonData);
		},
		formatReservationStatusState: function (sStatusText) {
			return "Success";
		},
		formatReservationStatusIcon: function (sStatusIcon) {
			return "sap-icon://pending";
		},
		onRequestAsstPress: function () {
			if (!this._oRequestAsstDialog) {
				this._oRequestAsstDialog = sap.ui.xmlfragment("com.shunyu.lqp.fiori-test-boeing.view.RequestAssistanceDialog", this);
				this.getView().addDependent(this._oRequestAsstDialog);
			}
			this._oRequestAsstDialog.open();
		},
		onCancelTicketPress: function () {
			this._oRequestAsstDialog.close();
		}

	});

});