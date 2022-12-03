/**
 * @param {string} a
 * @param {string} b
 *
 * @returns {string}
 */

// two 10^1000 numbers are added
function solve(a, b) {
  var result = [];
  var carry = 0;
  var i = a.length - 1;
  var j = b.length - 1;
  while (i >= 0 || j >= 0) {
    var sum = carry;
    if (i >= 0) {
      sum += parseInt(a[i]);
      i--;
    }
    if (j >= 0) {
      sum += parseInt(b[j]);
      j--;
    }
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
  }
  if (carry > 0) {
    result.push(carry);
  }
  return result.reverse().join("");
}

console.log(solve("3", "4"));
