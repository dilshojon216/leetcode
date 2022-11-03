var heightChecker = function (heights) {
  let count = 0;
  let sorted = heights.slice().sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) {
      count++;
    }
  }
  return count;
};
