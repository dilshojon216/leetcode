var reverseVowels = function (s) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var arr = s.split("");
  var left = 0;
  var right = arr.length - 1;
  while (left < right) {
    if (vowels.indexOf(arr[left]) === -1) {
      left++;
      continue;
    }
    if (vowels.indexOf(arr[right]) === -1) {
      right--;
      continue;
    }
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr.join("");
};
