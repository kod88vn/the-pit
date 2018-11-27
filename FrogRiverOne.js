function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const l = A.length;
    let sum = X * (X + 1) /2;
    const freq = {};
    
    for(let i = 0; i < l; i++) {
        let val = A[i];
        
        if(!freq[val]) {
            sum -= val;
            freq[val] = 1;
        }
        
        if(sum === 0) {
            return i;
        }
    }
    
    return -1;
    
}