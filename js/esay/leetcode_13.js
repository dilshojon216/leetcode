//* 13. Roman to Integer (Easy)- Rim raqamlarni 10 lik sonlarga aylantirish

/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/
//? Example 1:
// Input: s = "III"
// Output: 3

//? Example 2:
// Input: s = "IV"
// Output: 4

var romanToInt = function (s) {
  // rim raqamlarni 10 likdagi qiymatlarni  map ga  saqlab olamiz
  let map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  // natija uchun 0 dan boshlab  qiymatni saqlaymiz
  let result = 0;
  // berilgan stringni har bir  harfini tekshiramiz
  for (let i = 0; i < s.length; i++) {
    // agar  harf( rim belgisi)ning mapdagi qiymati unda keyingi harf(rim belgisi)ning qiymatidan kichik bo'lsa
    if (map.get(s[i]) < map.get(s[i + 1])) {
      // natijaga  keyingi harf(rim belgisi)ning qiymatidan  harf(rim belgisi)ning qiymatini ayiribmiz
      result -= map.get(s[i]);
    } else {
      // agar  harf( rim belgisi)ning mapdagi qiymati unda keyingi harf(rim belgisi)ning qiymatidan katta bo'lsa
      // natijaga  harf(rim belgisi)ning  qiymatini qo'shamiz
      result += map.get(s[i]);
    }
  }
  return result;
};

console.log(romanToInt("IX"));
