var findErrorNums = function (nums) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      result.push(nums[i]);
    } else {
      map.set(nums[i], 1);
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) {
      result.push(i);
    }
  }
  return result;
};
