jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
jQuery.sap.require("sap.ui.qunit.qunit-coverage");
QUnit.config.autostart = false;

sap.ui.require([
    "sap/ui/thirdparty/qunit",
    "fis/tgh/test/graph/test/unit/model/models",
    "fis/tgh/test/graph/test/unit/model/formatter"
], function(css, qunit, junit, coverage) {
    "use strict";

    QUnit.load();
    QUnit.start();
});
