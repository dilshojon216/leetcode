var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === target)
      return mid; // if the target is in nums, return target's index(mid)
    else if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  // when the target is not in nums
  if (target < nums[mid])
    return mid; // if target is smaller than nums[mid], mid is  where target will be inserted
  else return mid + 1; // if target is bigger than nums[mid], mid + 1 is where target will be inserted
};
