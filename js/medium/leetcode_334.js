var increasingTriplet = function (nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let mid = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= min) {
      min = nums[i];
    } else if (nums[i] <= mid) {
      mid = nums[i];
    } else {
      return true;
    }
  }
  return false;
};
