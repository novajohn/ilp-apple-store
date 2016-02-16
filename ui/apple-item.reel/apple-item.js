/**
 * @module ui/apple-item.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class AppleItem
 * @extends Component
 */
exports.AppleItem = Component.specialize(/** @lends AppleItem# */ {
    
    model: { value: null },
    
    constructor: {
        value: function AppleItem() {
            this.super();
        }
    }
    
});
