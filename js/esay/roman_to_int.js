var romanToInt = function(s) {
  const values = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M',1000]
  ])

  let result = 0, current = 0, previous = 0;
  for (const char of s.split("").reverse()) {
    current = values.get(char);
    if (current >= previous) {
      result += current;

    } else {
      result -= current;
    }
    previous = current;
  }

  return result;
};

console.log(romanToInt('MCMXCIV'))