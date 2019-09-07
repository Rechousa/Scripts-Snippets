/*
 * Author      : Pedro Martins
 *             : https://www.linkedin.com/in/rechousa
 *             : https://twitter.com/rechousapt
 *             : http://www.pedromartins.pt
 * Project     : Scripts & Snippets
 * Create date : 2019-09-07 01:15:00
 * Description : Math helpers
 * Remarks     : ---
*/

/* BEGIN: Math helpers */
/**
 * Computes slope value / trending value
 * @param {Array} a items array containing the items.
 */
function slope(values) {
    let xAvg = 0, yAvg = 0;
    for (let x = 0; x < values.length; x++) {
        xAvg += x;
        yAvg += values[x];
    }
    xAvg = xAvg / values.length;
    yAvg = yAvg / values.length;
    let v1 = 0, v2 = 0;
    for (let x = 0; x < values.length; x++) {
        v1 += (x - xAvg) * (values[x] - yAvg);
        v2 += Math.pow(x - xAvg, 2);
    }
    return v1 / v2;
}

/**
 * Apply slope value / trending value
 * @param {Array} a items array containing the items.
 */
function applySlope(values) {
    let xAvg = 0, yAvg = 0;
    for (let x = 0; x < values.length; x++) {
        xAvg += x;
        yAvg += values[x];
    }
    xAvg = xAvg / values.length;
    yAvg = yAvg / values.length;
    let v1 = 0, v2 = 0;
    for (let x = 0; x < values.length; x++) {
        v1 += (x - xAvg) * (values[x] - yAvg);
        v2 += Math.pow(x - xAvg, 2);
    }
    const a = v1 / v2;
    const b = yAvg - a * xAvg;
    let result = [];
    for (let index = 0; index < values.length; index++) {
        result.push(a * index + b);
    }
    return result;
}

/* END: Math helpers */

module.exports = {
    slope: slope,
    applySlope: applySlope
};
