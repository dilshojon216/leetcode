void main(List<String> args) {
  print(romanToInt("MCMXCIV"));
}

int romanToInt(String s) {
  Map<String, int> romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  int result = 0;
  for (int i = 0; i < s.length; i++) {
    if (i + 1 < s.length && romanMap[s[i]]! < romanMap[s[i + 1]]!) {
      result -= romanMap[s[i]]!;
    } else {
      result += romanMap[s[i]]!;
    }
  }
  return result;
}
