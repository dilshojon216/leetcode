var twoSum = function(nums, target) {
  let arry = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
          arry.push(i)
          arry.push(j)
          return arry
    }
     }
    
  }
};



console.log(twoSum([1,2,4],6))