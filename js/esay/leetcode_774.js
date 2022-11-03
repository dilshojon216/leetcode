var dominantIndex = function (nums) {
  let max = Math.max(...nums);
  let maxIndex = nums.indexOf(max);
  let max2 = Math.max(...nums.filter((v, i) => i !== maxIndex));
  return max >= max2 * 2 ? maxIndex : -1;
};
