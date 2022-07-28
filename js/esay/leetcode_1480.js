var runningSum = function (nums) {
  let a = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    a.push(sum);
  }
  return a;
};

console.log(runningSum([1, 2, 3, 4]));
