var sortArrayByParity = function (nums) {
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    if (nums[i] % 2 === 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
    i++;
  }
  return nums;
};
