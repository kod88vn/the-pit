
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(null == A || A.length < 3) return 0;

    let sorted = A.sort((a, b) => a > b);
    
    for(let i = 0; i < sorted.length - 2; i++) {
        let a = sorted[i];
        let b = sorted[i + 1];
        let c = sorted[i + 2];
        
        if(a > 0 && (a + b) > c) {
            return 1;
        }
    }
    
    return 0;
}
let sol = solution([10, 2, 5, 1, 8, 20]);
console.log(JSON.stringify(sol));