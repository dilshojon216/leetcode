var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  if (haystack === "") return -1;
  if (haystack.length < needle.length) return -1;
  if (haystack.length === needle.length) {
    if (haystack === needle) return 0;
    else return -1;
  }
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.substring(i, i + needle.length) === needle) return i;
  }
  return -1;
};
