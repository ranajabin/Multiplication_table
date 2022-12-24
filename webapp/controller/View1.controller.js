sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("multiplicationtable1.multiplicationtableproject.controller.View1", {
            onInit: function () {

            },

            onPressMultiply: function () {
                var num = this.getView().byId("inpt1").getValue();
                //   var limit = this.getView().byId("inpt2").getValue();
                var result = '';

                //  for (var i = 1; i <= limit; i++) {
                for (var i = 1; i <= 10; i++) {
                    result = result + num + "*" + i + "=" + num * i + "\n";
                }
                alert("Multiplication of Given Num :" + "\n" + (result));
            }
        });
    });
