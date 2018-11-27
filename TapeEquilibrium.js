// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sumLeft = 0;
    let sumRight = 0;
    let minDiff = 9999999999;
    
    for(let i = 0; i < A.length; i++) {
        sumRight += A[i];
    }
    
    
    
    for (let k = 0; k < A.length - 1; k++) {
        sumLeft += A[k];
        sumRight -= A[k];
        let diff = Math.abs(sumLeft - sumRight);
        
        if(diff < minDiff) {
            minDiff = diff;
        }
    }
    
    return minDiff;
}