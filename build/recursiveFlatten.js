"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  Flattens an array no matter how nested into a 1d array
 *
 * @param array a nested array that you want to be flattened
 * @returns a one dimensional array with the elements in the order seen
 */
function default_1(array) {
    let flattened = [];
    function flatten(array) {
        for (const item of array) {
            const isArray = Array.isArray(item);
            if (isArray) {
                flatten(item);
            }
            else {
                flattened.push(item);
            }
        }
    }
    flatten(array);
    return flattened;
}
exports.default = default_1;
//# sourceMappingURL=recursiveFlatten.js.map