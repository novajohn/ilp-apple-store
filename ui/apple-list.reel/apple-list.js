/**
 * @module ui/apple-list.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class AppleList
 * @extends Component
 */
exports.AppleList = Component.specialize(/** @lends AppleList# */ {
    
    applesList: {
        value: []
    },
    
    constructor: {
        value: function AppleList() {
            this.super();

            var _this = this;
            request.get('apples').then(function(res) {
                _this.applesList = res.data;
            }).catch(function(exp) {
                console.log(exp);
            });

        }
    }
});
