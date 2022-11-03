//* 1. Two Sum//

//! Butun sonlardan iborat  massiv nums va butun son target berilgan.
//! Massivdagi ikki elementning yig’indisi target ga teng bo’lsa,
//! ularning indekslarini qaytaruvchi funksiya yozing.

//? Example 1:

//? Input: nums = [2,7,11,15], target = 9
//? Output: [0,1]
//? Output: Because nums[0] + nums[1] == 9, we return [0, 1].

//? Example 2:

//? Input: nums = [3,2,4], target = 6
//? Output: [1,2]

var twoSum = function (nums, target) {
  //* Birinchi yechim   algoritimi

  // map yaratib olamiz  key:element value:indeks
  let map = new Map();
  // massiv elementlari ko'rib chiqamiz
  for (let i = 0; i < nums.length; i++) {
    //! target  massiv elemetlarning  ikki elementi yig'indisi bo'lgani uchun targetdan massiv
    //! elementini ayirib ikkinchi elementni qiymati qanday bo'lishni tekshiramiz.

    let complement = target - nums[i];

    // mapda  ikkinchi elementni qiymati borligini tekshiramiz

    if (map.has(complement)) {
      // bor bo'lsa indekslarini qaytarib beramiz

      return [map.get(complement), i];
    }

    // mapga  massiv elementini  key:element value:indeks  qo'shamiz
    map.set(nums[i], i);
  }

  //* Ikkinchi  yechim   algoritimi

  //  array yaratib olamiz
  let arry = [];
  // massiv elementlari ko'rib chiqamiz

  //! bunda nums[i] birinchi element deb olamiz

  for (let i = 0; i < nums.length; i++) {
    //ikki elementni  aniqlash uchun  massiv elementlaridan yana ko'rib chiqamiz

    //! bunda nums[j] ikkinchi element deb olamiz

    for (let j = i + 1; j < nums.length; j++) {
      // ikki element yig'indisi target ga teng bo'lsa

      if (nums[i] + nums[j] == target) {
        // ikki element indekslarini arrayga qo'shamiz

        arry.push(i);
        arry.push(j);
        return arry;
      }
    }
  }
};

//? Bu ikki yechim  algoritmlaridan biri  O(n) (vaqti kamroq ketadi) va ikkinchisi  O(n^2)  ko'paytmasiga ega.
