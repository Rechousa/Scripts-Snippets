/*
 * Author      : Pedro Martins
 *             : https://www.linkedin.com/in/rechousa
 *             : https://twitter.com/rechousapt
 *             : http://www.pedromartins.pt
 * Project     : Scripts & Snippets
 * Create date : 2019-07-04 01:57:47
 * Description : Testing Array helpers
 * Remarks     : ---
 * Usage       : npm test
*/

// 
const arrays = require('./arrays');

test('clone [1,2,3,4,5] array to [1,2,3,4]', () => {
  expect(arrays.cloneArray([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
});

test('shuffleArray [1,2,3,4,5] array to [1,2,3,4]', () => {
  expect(arrays.shuffleArray(['a', 'b', 'c', 'd', 'e'])[0]).toMatch(/a|b|c|d|e/);
});
