var singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
    console.log(result);
  }
  return result;
};
console.log(singleNumber([2, 2, 1]));
