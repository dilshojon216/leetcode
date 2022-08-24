var uniqueMorseRepresentations = function (words) {
  var morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  var set = new Set();
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var code = "";
    for (var j = 0; j < word.length; j++) {
      code += morse[word.charCodeAt(j) - 97];
    }
    set.add(code);
  }
  return set.size;
};
