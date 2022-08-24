void main(List<String> args) {
  print(twoSum([2, 7, 11, 15], 9));
}

List<int> twoSum(List<int> nums, int target) {
  List<int> indexList = [];
  for (int i = 0; i < nums.length; i++) {
    for (int j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        indexList.add(i);
        indexList.add(j);
      }
    }
  }
  return indexList;
}
