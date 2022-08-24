void main(List<String> args) {
  print(removeDuplicates([1, 1, 2]));
}

int removeDuplicates(List<int> nums) {
  if (nums.isEmpty) {
    return 0;
  }
  int count = 0;
  //1)0-0  count=0 i=0 count=0
  //2) 0 - 0 count=0 i=1 count=0
  //3) 0 - 1 count=0 i=2 count=1

  for (int i = 0; i < nums.length; i++) {
    if (nums[i] != nums[count]) {
      count++;
      nums[count] = nums[i];
    }
  }

  return count + 1;
}
