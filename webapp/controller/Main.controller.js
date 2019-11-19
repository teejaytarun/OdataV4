sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("demo.teejay.OdataV4.controller.Main", {
		onInit: function () {

		},
			onSave : function () {
			var fnSuccess = function () {
				this.getView().setBusy(false);
				MessageToast.show("Changes Sent");
			}.bind(this);

			var fnError = function (oError) {
				this.getView().setBusy(false);
				MessageToast.show("Error");
			}.bind(this);

			this.getView().setBusy(true); // Lock UI until submitBatch is resolved.
			this.getView().getModel("odataModel").submitBatch("updateGroup").then(fnSuccess, fnError);
		
		},
						onListItemPress: function(oEvent) {
					oEvent.getSource().getBindingContext("odataModel").setProperty("LastName", "Jain");
					
			
			
		}

	});
});