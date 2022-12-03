void main(List<String> args) {
  print(twoSum([2, 7, 11, 15], 9));
}

List<int> twoSum(List<int> nums, int target) {
  Map<int, int> map = new Map();
  for (int i = 0; i < nums.length; i++) {
    int complement = target - nums[i];
    if (map.containsKey(complement)) {
      return [map[complement]!, i];
    }
    map[nums[i]] = i;
  }
  throw new Exception("No two sum solution");
}
