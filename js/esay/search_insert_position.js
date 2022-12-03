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

let string =
  "$OHAN1/SORG4122/11/28 04:380600R07654.0000,01R01.0000,02R0156.0000,03R01.0000,04R0143.0000,05R00.0000$";
let string1 = string.substring(1, string.length);
let resutl = "20" + string1.substring(12, 26);
let dd = resutl.split(/-|\s|:/);
let year = dd[0].split("/");

let date = new Date(year[0], year[1] - 1, year[2], parseInt(dd[1]), dd[2]);

let sting = date.toTimeString();
let ss = sting.replaceAll("-", "/");
let sdd = ss.replaceAll("T", ",").substring(2, 19);
console.log(sdd);

let map = {
  a: 1,
  b: 2,
};

console.log(map);
