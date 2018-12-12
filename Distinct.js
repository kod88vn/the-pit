function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let o = {};
    for(let i = 0; i < A.length; i++) {
        o[A[i]] = null;
    }
    return Object.keys(o).length;
}
let sol = solution([4, 2, 2, 5, 1, 5, 8]);
console.log(JSON.stringify(sol));