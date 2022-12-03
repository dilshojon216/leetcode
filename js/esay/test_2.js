/**
 * @param {number} n
 * @param {number[]} arr
 *
 * @returns {number}
 */
function solve(n, arr) {
  let map = new Map();

  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  for (let [key, value] of map) {
    if (value == 1) {
      return key;
    }
  }
}

console.log(solve(5, [0, 0, 1, 2, 1]));
