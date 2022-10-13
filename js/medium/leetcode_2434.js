var robotWithString = function (s) {
  let x = 0,
    y = 0,
    d = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "G") {
      if (d == 0) {
        y++;
      } else if (d == 1) {
        x++;
      } else if (d == 2) {
        y--;
      } else {
        x--;
      }
    } else if (s[i] == "L") {
      d = (d + 3) % 4;
    } else {
      d = (d + 1) % 4;
    }
  }
  return [x, y];
};
