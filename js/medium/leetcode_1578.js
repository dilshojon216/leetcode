var minCost = function (colors, neededTime) {
  let minCost = 0;
  let prev = "",
    sameseq = 1;

  const getMinCost = (start, len) => {
    let maxCost = 0,
      total = 0;
    for (let incr = 0; incr < len; incr++) {
      if (cost[start + incr] > maxCost) maxCost = cost[start + incr];
      total += cost[start + incr];
    }
    return total - maxCost;
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === prev) {
      sameseq++;
      if (i === s.length - 1) minCost += getMinCost(i - (sameseq - 1), sameseq);
    } else {
      if (sameseq > 1) minCost += getMinCost(i - sameseq, sameseq);
      sameseq = 1;
      prev = s[i];
    }
  }

  return minCost;
};
