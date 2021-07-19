"use strict";
/**
 *  Flattens an array no matter how nested into a 1d array
 *
 * @param array a nested array that you want to be flattened
 * @returns a one dimensional array with the elements in the order seen
 */
function recursiveFlatten(array) {
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
function main() {
    const data = [1, [2, 3, [4, 5], 6], 7, [8, 9, [[10]]]];
    const flattened = recursiveFlatten(data);
    console.log(`flattened = [${flattened}]`);
    // output>>> flattened = [1,2,3,4,5,6,7,8,9,10]
}
main();
//# sourceMappingURL=index.js.map