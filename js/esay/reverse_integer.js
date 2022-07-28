var reverse = function(x) {

  if(x < 0) return -1 * reverse(-x) ;
  const soulution = (x + "").split('').reverse().join('');
  console.log(soulution)
return (soulution > 2**31)? 0 : soulution ;
};

console.log(reverse(-1230))
