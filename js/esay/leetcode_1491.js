var average = function (salary) {
  let maxIndex = 0;
  let minIndex = 0;
  let sum = 0;
  for (let i = 0; i < salary.length; i++) {
    if (salary[i] > salary[maxIndex]) {
      maxIndex = i;
    }
    if (salary[i] < salary[minIndex]) {
      minIndex = i;
    }
    sum += salary[i];
  }
  return (sum - salary[maxIndex] - salary[minIndex]) / (salary.length - 2);
};
console.log(average([4000, 3000, 1000, 2000]));
