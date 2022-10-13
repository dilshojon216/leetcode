var findWords = function (words) {
  const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const row = rows.find((row) => row.includes(word[0].toLowerCase()));
    if (word.split("").every((char) => row.includes(char.toLowerCase()))) {
      result.push(word);
    }
  }
  return result;
};
