/*
 * Author      : Pedro Martins
 *             : https://www.linkedin.com/in/rechousa
 *             : https://twitter.com/rechousapt
 *             : http://www.pedromartins.pt
 * Project     : Scripts & Snippets
 * Create date : 2019-06-18 01:32:30
 * Description : Array helpers
 * Remarks     : ---
*/

/* BEGIN: Array handling */
/**
 * Returns a new instance (copy) from the specified array. ES6 version
 * @param {Array} a items An array containing the items.
 */
function cloneArray(array) {
    var retorno = [].concat(array);
    return retorno;
}

/// Shuffles an array
function shuffleArray(array) {
    var newArray = cloneArray(array);
    for (var j, x, i = newArray.length; i; j = Math.floor(Math.random() * i), x = newArray[--i], newArray[i] = newArray[j], newArray[j] = x);
    return newArray;
}
/* END: Array handling */

module.exports = {
    cloneArray: cloneArray,
    shuffleArray: shuffleArray
};
