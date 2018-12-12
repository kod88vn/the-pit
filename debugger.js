function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counter = 0;
    let segments = A.map((r, i) => [i - r, i + r]).sort((a, b) => a[0] > b[0]);
    console.log(JSON.stringify(segments));

    for(let i = 0; i < segments.length; i++) {
        for(let j = i + 1; j < segments.length; j++) {
            if (segments[j][0] <= segments[i][1]) {
                counter++;
            }
        }
    }
    return counter;
}

let sol = solution([1, 5, 2, 1, 4, 0] );
// let sol = solution([1, 1, 1] );

console.log(JSON.stringify(sol));

// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let counter = 0;
//     for(let i = 0; i < A.length - 1; i++) {
//         for(let j = i + 1; j < A.length; j ++) {
//             if(A[i] + A[j] >= j - i) {
//                 counter += 1;
//             }
//         }
//     }
//     return counter;
// }