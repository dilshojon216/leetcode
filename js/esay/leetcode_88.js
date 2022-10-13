var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  j = n - 1;
  k = n + m - 1;

  while (k >= 0) {
    if (i >= 0 && j >= 0) {
      if (nums1[i] >= nums2[j]) {
        nums1[k--] = nums1[i--];
      } else {
        nums1[k--] = nums2[j--];
      }
    } else if (j >= 0) {
      nums1[k--] = nums2[j--];
    } else {
      break;
    }
  }
  return nums1;
};

console.log(merge([1], 1, [], 0));
