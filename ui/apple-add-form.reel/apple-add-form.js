/**
 * @module ui/apple-add-form.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class AppleAddForm
 * @extends Component
 */
exports.AppleAddForm = Component.specialize(/** @lends AppleAddForm# */ {
    
    isShown: {value: false},
    
    constructor: {
        value: function AppleAddForm() {
            this.super();
        }
    },

    handleAddButtonAction: {
        value: function (event) {
        }
    },

    handleCancelButtonAction: {
        value: function (event) {
            this.isShown = false;
        }
    }

});
