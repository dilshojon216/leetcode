void main(List<String> args) {
  print(isValid(""));
}

bool isValid(String s) {
  if (s.length == 0) {
    return true;
  }
  if (s.length % 2 != 0) {
    return false;
  }
  Map<String, String> map = {')': '(', ']': '[', '}': '{'};
  List<String> stack = [];
  for (int i = 0; i < s.length; i++) {
    if (map.containsKey(s[i])) {
      if (stack.isEmpty) {
        return false;
      }
      if (stack.last != map[s[i]]) {
        return false;
      }
      stack.removeLast();
    } else {
      stack.add(s[i]);
    }
  }
  return stack.isEmpty;
}
