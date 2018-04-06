sap.ui.define([
	"fis/tgh/test/graph/controller/BaseController",
	"fis/tgh/test/graph/model/formatter",
	"fis/tgh/test/graph/helper/util",
	"sap/ui/model/json/JSONModel"
], function(BaseController, formatter, util, JSONModel) {
	"use strict";

	return BaseController.extend("fis.tgh.test.graph.controller.Main", {

		formatter: formatter,
		util: util,

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the controller is instantiated.
		 * @public
		 */
		onInit: function() {
			this.setModel(this.createViewModel());
		},

		/* =========================================================== */
		/* event handlers                                              */
		/* =========================================================== */

		/* =========================================================== */
		/* internal methods                                            */
		/* =========================================================== */

		createViewModel: function() {
			return new JSONModel({
				"nodeBoxWidth": 200,
				"nodes": [{
					"key": 0,
					"title": "CustReportType",
					"icon": "",
					"shape": "Box",
					"status": "Standard",
					"attributes": [{
						"label": "GenerationId",
						"value": "String"
					}, {
						"label": "ProfessionId",
						"value": "String"
					}, {
						"label": "Combined",
						"value": "Boolean"
					}, {
						"label": "Daily",
						"value": "Boolean"
					}, {
						"label": "School",
						"value": "Boolean"
					}, {
						"label": "Work",
						"value": "Boolean"
					}]
				}, {
					"key": 1,
					"title": "ReportTextSchool",
					"icon": "",
					"shape": "Box",
					"status": "Standard",
					"attributes": [{
						"label": "ReportId",
						"value": "Int32"
					}, {
						"label": "SubjectId",
						"value": "String"
					}, {
						"label": "TraineeId",
						"value": "String"
					}, {
						"label": "Text",
						"value": "String"
					}]
				}, {
					"key": 2,
					"title": "Department",
					"icon": "",
					"shape": "Box",
					"status": "Standard",
					"attributes": [{
						"label": "DepartmentId",
						"value": "String"
					}, {
						"label": "Description",
						"value": "String"
					}, {
						"label": "Text",
						"value": "String"
					}]
				}, {
					"key": 3,
					"title": "Generation",
					"icon": "",
					"shape": "Box",
					"status": "Standard",
					"attributes": [{
						"label": "GenerationId",
						"value": "String"
					}, {
						"label": "Description",
						"value": "String"
					}, {
						"label": "Text",
						"value": "String"
					}, {
						"label": "TrainingBegin",
						"value": "DateTime"
					}, {
						"label": "HasCorrReport",
						"value": "Boolean"
					}]
				}, {
					"key": 4,
					"title": "CustTraineeTrainerHead",
					"icon": "",
					"shape": "Box",
					"status": "Standard",
					"attributes": [{
						"label": "DepartmentId",
						"value": "String"
					}, {
						"label": "GenerationId",
						"value": "String"
					}, {
						"label": "ProfessionId",
						"value": "String"
					}, {
						"label": "TraineeId",
						"value": "String"
					}, {
						"label": "TrainingYear",
						"value": "Int32"
					}, {
						"label": "HeadId",
						"value": "String"
					}, {
						"label": "TrainerId",
						"value": "String"
					}, {
						"label": "TrainingYear",
						"value": "Boolean"
					}, {
						"label": "TrainingYear",
						"value": "Boolean"
					}]
				}, {
					"key": 5,
					"title": "Subject",
					"icon": "",
					"shape": "Box",
					"status": "Standard",
					"attributes": [{
						"label": "SubjectId",
						"value": "String"
					}, {
						"label": "Description",
						"value": "String"
					}, {
						"label": "Text",
						"value": "String"
					}]
				}, {
					"key": 7,
					"title": "ReadNotification",
					"icon": "",
					"shape": "Box",
					"status": "Standard",
					"attributes": [{
						"label": "NotificationId",
						"value": "Int32"
					}, {
						"label": "ReaderId",
						"value": "String"
					}]
				}, {
					"key": 6,
					"title": "HistoryEntry",
					"icon": "",
					"shape": "Box",
					"status": "Standard",
					"attributes": [{
						"label": "HistEntryId",
						"value": "Int32"
					}, {
						"label": "ReportId",
						"value": "Int32"
					}, {
						"label": "TraineeId",
						"value": "String"
					}, {
						"label": "HistoryActionId",
						"value": "String"
					}, {
						"label": "Text",
						"value": "String"
					}, {
						"label": "Text",
						"value": "String"
					}]
				}],
				"lines": [{
					"from": 0,
					"to": 1,
					"status": "Standard"
				}],
				"groups": [
				// {
				// 	"key": "F",
				// 	"title": "Farmer"
				// }
				]
			});
		},

		createViewModel2: function() {
			return new JSONModel({
				"nodeBoxWidth": 200,
				"nodes": [{
					"key": 0,
					"title": "Amber",
					"icon": "sap-icon://checklist",
					"status": "Error",
					"group": "T"
				}, {
					"key": 1,
					"title": "Beads",
					"icon": "sap-icon://bubble-chart"
				}, {
					"key": 2,
					"title": "Bow & arrows",
					"icon": "sap-icon://back-to-top"
				}, {
					"key": 3,
					"title": "Broth",
					"icon": "sap-icon://competitor",
					"shape": "Box",
					"status": "Success",
					"attributes": [{
						"label": "Energy",
						"value": "780 kcal"
					}, {
						"label": "Protein",
						"value": "49 g"
					}, {
						"label": "Carb",
						"value": "52 g"
					}, {
						"label": "Fat",
						"value": "11 g"
					}]
				}, {
					"key": 4,
					"title": "Bucket",
					"icon": "sap-icon://pipeline-analysis",
					"group": "V"
				}, {
					"key": 5,
					"title": "Coat",
					"icon": "sap-icon://wounds-doc"
				}, {
					"key": 6,
					"title": "Fish bone",
					"icon": "sap-icon://close-command-field",
					"group": "H"
				}, {
					"key": 7,
					"title": "Flax",
					"icon": "sap-icon://sort-descending",
					"group": "F"
				}, {
					"key": 8,
					"title": "Fur",
					"icon": "sap-icon://key-user-settings",
					"status": "Warning"
				}, {
					"key": 9,
					"title": "Game",
					"icon": "sap-icon://laptop",
					"status": "Warning"
				}, {
					"key": 10,
					"title": "Hemp",
					"icon": "sap-icon://radar-chart",
					"group": "F",
					"status": "Success"
				}, {
					"key": 11,
					"title": "Husk",
					"icon": "sap-icon://product",
					"group": "V",
					"status": "Warning"
				}, {
					"key": 12,
					"title": "Charcoal",
					"icon": "sap-icon://vertical-stacked-chart"
				}, {
					"key": 13,
					"title": "Iron ingot",
					"icon": "sap-icon://value-help"
				}, {
					"key": 14,
					"title": "Iron ore",
					"icon": "sap-icon://technical-object",
					"status": "Error",
					"group": "M"
				}, {
					"key": 15,
					"title": "Kettle",
					"icon": "sap-icon://measuring-point"
				}, {
					"key": 16,
					"title": "Leather",
					"icon": "sap-icon://map-3",
					"group": "H"
				}, {
					"key": 17,
					"title": "Linen",
					"icon": "sap-icon://open-folder"
				}, {
					"key": 18,
					"title": "Mud",
					"icon": "sap-icon://pool",
					"group": "V",
					"status": "Success"
				}, {
					"key": 19,
					"title": "Needle",
					"icon": "sap-icon://pushpin-off"
				}, {
					"key": 20,
					"title": "Oxen fat",
					"icon": "sap-icon://pharmacy",
					"status": "Error"
				}, {
					"key": 21,
					"title": "Pile & clay",
					"icon": "sap-icon://mileage",
					"group": "V",
					"status": "Success"
				}, {
					"key": 22,
					"title": "Rabbit",
					"icon": "sap-icon://Netweaver-business-client",
					"group": "H"
				}, {
					"key": 23,
					"title": "Sickle",
					"icon": "sap-icon://restart",
					"group": "F"
				}, {
					"key": 24,
					"title": "Sinews",
					"icon": "sap-icon://repost",
					"group": "H",
					"status": "Success"
				}, {
					"key": 25,
					"title": "Smelter",
					"icon": "sap-icon://basket"
				}, {
					"key": 26,
					"title": "Stones",
					"icon": "sap-icon://bbyd-dashboard",
					"group": "V",
					"status": "Success"
				}, {
					"key": 27,
					"title": "Timber",
					"icon": "sap-icon://crossed-line-chart",
					"group": "F",
					"status": "Success"
				}, {
					"key": 28,
					"title": "Trail",
					"icon": "sap-icon://horizontal-grip",
					"group": "H",
					"status": "Success"
				}, {
					"key": 29,
					"title": "Trap",
					"icon": "sap-icon://flag",
					"group": "H"
				}, {
					"key": 30,
					"title": "Trout",
					"icon": "sap-icon://attachment",
					"group": "H",
					"status": "Warning"
				}, {
					"key": 31,
					"title": "Vegetable",
					"icon": "sap-icon://nutrition-activity",
					"group": "F",
					"status": "Warning"
				}, {
					"key": 32,
					"title": "Water",
					"icon": "sap-icon://lab",
					"status": "Success"
				}, {
					"key": 33,
					"title": "Whetstone",
					"icon": "sap-icon://measure",
					"status": "Success",
					"group": "T"
				}, {
					"key": 34,
					"title": "Winter coat",
					"icon": "sap-icon://heating-cooling",
					"shape": "Box",
					"status": "Warning",
					"attributes": [{
						"label": "Comfort",
						"value": "-10° C"
					}, {
						"label": "Extreme",
						"value": "-25° C"
					}, {
						"label": "Weight",
						"value": "6.25 kg"
					}]
				}, {
					"key": 35,
					"title": "Wood",
					"icon": "sap-icon://e-care",
					"group": "V",
					"status": "Success"
				}],
				"lines": [{
					"from": 0,
					"to": 1,
					"status": "Warning"
				}, {
					"from": 1,
					"to": 5
				}, {
					"from": 2,
					"to": 9
				}, {
					"from": 4,
					"to": 18
				}, {
					"from": 5,
					"to": 34
				}, {
					"from": 6,
					"to": 19
				}, {
					"from": 7,
					"to": 17
				}, {
					"from": 8,
					"to": 34
				}, {
					"from": 9,
					"to": 3
				}, {
					"from": 10,
					"to": 2
				}, {
					"from": 11,
					"to": 4
				}, {
					"from": 12,
					"to": 13
				}, {
					"from": 13,
					"to": 15
				}, {
					"from": 14,
					"to": 13
				}, {
					"from": 15,
					"to": 3
				}, {
					"from": 16,
					"to": 5
				}, {
					"from": 17,
					"to": 5
				}, {
					"from": 18,
					"to": 25
				}, {
					"from": 19,
					"to": 5
				}, {
					"from": 20,
					"to": 34
				}, {
					"from": 21,
					"to": 12
				}, {
					"from": 22,
					"to": 16
				}, {
					"from": 23,
					"to": 7
				}, {
					"from": 24,
					"to": 29
				}, {
					"from": 25,
					"to": 13
				}, {
					"from": 26,
					"to": 25
				}, {
					"from": 27,
					"to": 23
				}, {
					"from": 28,
					"to": 22
				}, {
					"from": 29,
					"to": 22
				}, {
					"from": 30,
					"to": 6
				}, {
					"from": 31,
					"to": 3
				}, {
					"from": 32,
					"to": 3
				}, {
					"from": 33,
					"to": 1
				}, {
					"from": 35,
					"to": 2
				}],
				"groups": [{
					"key": "F",
					"title": "Farmer"
				}, {
					"key": "H",
					"title": "Hunter"
				}, {
					"key": "M",
					"title": "Miner"
				}, {
					"key": "V",
					"title": "Villager"
				}, {
					"key": "T",
					"title": "Trader"
				}]
			});
		}
	});
});
