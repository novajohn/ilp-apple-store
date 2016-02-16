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

            var _this = this,
                appleList = this.parentComponent.templateObjects.appleList.templateObjects.apples.content;

            var variety = this.templateObjects.varietyTextField.value,
                description = this.templateObjects.descriptionTextArea.value,
                price = this.templateObjects.priceNumber.value;

            request.post('apples', {
                variety: variety,
                price: price,
                description: description
            }).then(function(res) {
                appleList.unshift(res.data);
                _this.isShown = false;
            }).catch(function(exp) {
                console.log(exp);
            });
        }
    },

    handleCancelButtonAction: {
        value: function (event) {
            this.isShown = false;
        }
    }

});
