var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const s = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - s) < Math.abs(target - closest)) {
        closest = s;
      }
      if (s < target) left += 1;
      else right -= 1;
    }
  }
  return closest;
};
