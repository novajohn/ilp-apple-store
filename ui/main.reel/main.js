/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    handleAddAppleButtonAction: {
        value: function (event) {
            
            this.templateObjects.appleAddForm.isShown = true;
            
        }
    }

});
