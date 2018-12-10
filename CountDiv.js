function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A % K == 0)  
        return Math.floor((B - A) / K + 1)
    else           
        return Math.floor((B - (A - A % K )) / K)
}