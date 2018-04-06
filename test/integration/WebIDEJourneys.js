jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.define([
    "sap/ui/test/Opa5",
    "fis/tgh/test/graph/test/integration/pages/Common",
    "fis/tgh/test/graph/test/integration/pages/App"
], function(Opa5, Common) {
    "use strict";
    Opa5.extendConfig({
        arrangements: new Common(),
        viewNamespace: "fis.tgh.test.graph.view.",
        autoWait: true
    });

    sap.ui.require([
        "fis/tgh/test/graph/test/integration/journeys/AppJourney"
    ], function() {
        QUnit.start();
    });
});