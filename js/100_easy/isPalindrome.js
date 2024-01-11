var isPalindrome = function(x) {
    if(x<0 ||(x!=0&& x%10==0)) return false;
    let ask=x;
    

    let number=0;
    while(x!=0){
        let k=x%10;
       
        x=Math.trunc(x/10)
        number=10*number+k;
       
    }
    console.log(number)

    return (ask===number)
  
};

console.log(isPalindrome(123))