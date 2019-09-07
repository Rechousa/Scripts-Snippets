/*
 * Author      : Pedro Martins
 *             : https://www.linkedin.com/in/rechousa
 *             : https://twitter.com/rechousapt
 *             : http://www.pedromartins.pt
 * Project     : Scripts & Snippets
 * Create date : 2019-09-07 01:18:47
 * Description : Testing Math helpers
 * Remarks     : ---
 * Usage       : npm test or npm run test -- --watch
*/

// 
const math = require('./math');

/* BEGIN: slope tests: */
test('slope [] should return NaN', () => {
    expect(math.slope([])).toStrictEqual(NaN);
});

test('slope [1.3] should return NaN', () => {
    expect(math.slope([1.3])).toStrictEqual(NaN);
});

test('slope [1.0, 3.5] should return 2.5', () => {
    expect(math.slope([1.0, 3.5])).toStrictEqual(2.5);
});

test('slope [4.8, 4.8, 4.5, 3.9, 4.4, 3.6, 3.6, 2.9, 3.5, 3.0, 2.5, 2.2, 2.6, 2.1, 2.2] should return -0.20607142857142854', () => {
    expect(math.slope([4.8, 4.8, 4.5, 3.9, 4.4, 3.6, 3.6, 2.9, 3.5, 3.0, 2.5, 2.2, 2.6, 2.1, 2.2])).toStrictEqual(-0.20607142857142854);
});
/* END: slope tests: */


/* BEGIN: applySlope tests: */
test('applySlope [] should return []', () => {
    expect(math.applySlope([])).toStrictEqual([]);
});

test('applySlope [1.3] should return [NaN]', () => {
    expect(math.applySlope([1.3])).toStrictEqual([NaN]);
});

test('applySlope [1.0, 3.5] should return [1.0, 3.5]', () => {
    expect(math.applySlope([1.0, 3.5])).toStrictEqual([1.0, 3.5]);
});

test('applySlope [4.8, 4.8, 4.5, 3.9, 4.4, 3.6, 3.6, 2.9, 3.5, 3.0, 2.5, 2.2, 2.6, 2.1, 2.2] should return -0.20607142857142854', () => {
    expect(math.applySlope([4.8, 4.8, 4.5, 3.9, 4.4, 3.6, 3.6, 2.9, 3.5, 3.0, 2.5, 2.2, 2.6, 2.1, 2.2]))
        .toStrictEqual([4.815833333333334, 4.609761904761905, 4.4036904761904765, 4.197619047619048, 3.9915476190476196, 3.7854761904761913, 3.5794047619047626, 3.373333333333334, 3.1672619047619053, 2.961190476190477, 2.7551190476190484, 2.5490476190476197, 2.3429761904761914, 2.1369047619047628, 1.930833333333334]);
});
/* END: applySlope tests: */
