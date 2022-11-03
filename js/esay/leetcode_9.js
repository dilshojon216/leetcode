//* 9. Palindrome Number (Palindrom raqami)

//! X butun soni berilgan bo'lsa,
//! agar x palindrom bo'lsa rost,
//! aks holda noto'g'ri qiymatini qaytaring.

//* Masalan:
//* Input: x = 121
//* Output: true
//* Izoh: 121 chapdan o'ngga va o'ngdan chapga 121 deb o'qiladi.

//* Input: x = -121
//* Output: false
//* Izoh: -121 chapdan o'ngga va o'ngdan chapga 121- deb o'qiladi.

var isPalindrome = function (x) {
  // 1-usul
  // x soni manfiy bo'lsa bu  palindrom soni emas
  if (x < 0) return false;
  // x soni stringa aylantiriladi
  let str = x.toString();
  // x soni stringda chapdan o'ngga va o'ngdan chapga o'qiladi
  let str1 = str.split("").reverse().join("");
  // agar x soni stringda chapdan o'ngga va o'ngdan chapga o'qilgan bo'lsa bu palindrom son
  if (str === str1) return true;
  // aks holda bu palindrom son emas
  else return false;

  // 2-usul
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x /= 10;
  }

  return x == revertedNumber || x == revertedNumber / 10;
};
