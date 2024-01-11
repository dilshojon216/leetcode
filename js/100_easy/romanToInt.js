var romanToInt = function(s) {
    const romanVal = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    } 
    let result = 0;
    for(let i=0;i<s.length;i++){
        let crtSymVal = romanVal[s[i]];
        let nxtSymVal = romanVal[s[i+1]];
        if (nxtSymVal > crtSymVal){
            result += -crtSymVal;
        }else{
            result += crtSymVal;
        }
    }
        return result;


};

console.log(romanToInt("MCMXCIV"));