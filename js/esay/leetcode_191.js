var hammingWeight = function (n) {
  let count = 0;
  let x = n.toString(2);
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "1") {
      count++;
    }
  }
  return count;
};

console.log(hammingWeight(11111111111111111111111111111101));
