var minDifficulty = function (jobDifficulty, d) {
  // if we don't have enough jobs for the number of days return -1;
  if (jobDifficulty.length < d) return -1;

  // initialize the cache that will have the key of starting index
  // and number of days
  // the value will be the value of the max for the current job plus the
  // minimum total of all days after
  const cache = {};

  // Depth First Search using a bottom up approach
  // We want to return the minimum total difficulty for each starting index
  // corresponding to each number of days left
  const dfs = (start, numDays) => {
    // if we have used all of our days and we have reach the end of jobs
    // return 0
    // if we have used all our days but haven't finished all our jobs
    // return Infinity because we didn't complete all of our jobs (result is invalid)
    if (numDays === d) {
      return start === jobDifficulty.length ? 0 : Infinity;
    }

    // create a unique key for our cache for each depth
    const key = `${start}-${numDays}`;
    // if the key is in the cache return the value
    if (cache[key] !== undefined) return cache[key];

    // calculate the last index for this day's number
    // if we go beyond that index we will have more days than jobs
    const end = jobDifficulty.length - d + numDays;

    // result will hold the minimum total of all following days
    let result = Infinity;
    // max will hold the max for the current day
    let max = -Infinity;

    // iterate through the jobs updating the max and searching the remainder
    // of jobs and days
    for (let i = start; i <= end; i++) {
      max = Math.max(max, jobDifficulty[i]);
      result = Math.min(result, max + dfs(i + 1, numDays + 1));
    }

    // save the result in the cach and return it;
    return (cache[key] = result);
  };
  return dfs(0, 0);
};
