sap.ui.require(
    [
        "fis/tgh/test/graph/model/formatter",
        "sap/ui/model/resource/ResourceModel",
        "fis/tgh/test/graph/model/Constant",
        "sap/ui/thirdparty/sinon",
        "sap/ui/thirdparty/sinon-qunit"

    ],
    function(formatter, ResourceModel, Constant) {
        "use strict";
        QUnit.module("UNIT Formatter", {
            beforeEach: function() {
                this._oResourceModel = new ResourceModel({
                    bundleUrl: jQuery.sap.getModulePath("fis.tgh.test.graph",
                        "/i18n/i18n.properties")
                });
            },
            afterEach: function() {
                this._oResourceModel.destroy();
            }
        });
    }
);