var subtractProductAndSum = function (n) {
  let productDigits = 1;
  let sumDigits = 0;
  //   let x = n.toString();
  //   for (let i = 0; i < x.length; i++) {
  //     productDigits *= parseInt(x[i]);
  //     sumDigits += parseInt(x[i]);
  //   }

  while (n > 0) {
    let a = n % 10;
    productDigits *= a;
    sumDigits += a;
    n = parseInt(n / 10);
    console.log(n);
  }
  return productDigits - sumDigits;
};

console.log(subtractProductAndSum(4421));
