var numberOfPairs = function (nums) {
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 0) {
        count++;
      }
    }
  }
  return count;
};
console.log([1, 3, 2, 1, 3, 2, 2]);
