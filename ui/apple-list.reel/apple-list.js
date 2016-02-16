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
        value: ["Белые", "Красные", "Зеленые", "Синии", "Оранжевые", "Бирюзовые", "Фиолетовые"]
    },
    
    constructor: {
        value: function AppleList() {
            this.super();
            
          
            
            
        }
    }
});
