// Input: time = "0?:0?"
// Output: 100
// Explanation: Each ? can be replaced by any digit from 0 to 9, so we have 100 total choices.
var countTime = function (time) {
  let count = 0;
  for (let i = 0; i < time.length; i++) {
    if (time[i] === "?") {
    }
  }
  return count;
};

console.log(countTime("?5:00"));
