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
