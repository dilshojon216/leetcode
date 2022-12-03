import 'dart:convert';
import 'dart:io';

void main(List<String> args) async {
  var data = await readJsonFile("../esay/eachdaydatas_piskon.json");

  print(data);
}

Future<List<Map>> readJsonFile(String filePath) async {
  var input = await File(filePath).readAsString();
  var map = jsonDecode(input);
  return map;
}
