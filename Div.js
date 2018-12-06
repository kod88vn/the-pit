function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sol = 0;
    if(A%K === 0) {
        sol += 1;
        sol += Math.floor((B-A)/K);
    }
     else {
        sol += Math.ceil((B-A)/K);
    }
    return sol;
}

let sol = solution(11, 14, 2);    


// function solution(A, B, K) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let sol = 0;
//     for (let i = A; i <= B; i++) {
//         if((i%K) === 0) {
//             sol++;
//         }
//     }
//     return sol;
// }