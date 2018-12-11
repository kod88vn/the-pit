// Question: https://codility.com/demo/take-sample-test/min_avg_two_slice

// Question Name: MinAvgTwoSlice

// The key to solve this task is these two patterns:  

// (1) There must be some slices, with length of two or three, having the minimal average value among all the slices.
// (2) And all the longer slices with minimal average are built up with these 2-element and/or 3-element small slices.

// Firstly we will prove the statement (1). In all the following discussion, we assume the slices have two or more element. In every array, there must be at lease one slice, to say S, having the Minimal Average (MA). And PLEASE PAY ATTENTION, the following proof is done with the S, which HAS the global minimal average.

// If the length of S is two or three, it follows our conclusion.
// If the length of S is odd, we could divide it into a 3-element sub-slice and some 2-element sub-slice. For example, for the slice [1, 2, 3, 4, 5], we could get a 3-element sub-slice [1, 2, 3] and a 2-element sub-slice [4, 5]. Or differently we could get [1, 2] and [3, 4, 5]. But the split does not matter in the following prove.
// If the sub-slices have different averages, some of them will have smaller average than MA. But it conflicts with the condition that, the MA is known as the global minimal average for all slices.  By this contradictory, it’s proved that all the sub-slices MUST have the same average.
// If all the sub-slices have the same average, the average of them must be MA. So all these sub-slices have overall minimal average and length of two or three.
// If the length of S is even, we could divide it into some 2-element sub-slice. For the slice [1, 2, 3, 4], the only possible split is [1, 2] and [3, 4]. Then, similar with the previous case, all these 2-element sub-slices have the global minimal average.

function solution(A) {
    let min = [999999, 0];
    let avg;

    for(let i = 0; i < A.length - 2; i++) {
        // slice of 2
        avg = (A[i+1] + A[i])/2;
        if(min[0] > avg) {
            min[0] = avg;
            min[1] = i;
        }

        // slice of 3
        avg = (A[i+2] + A[i+1] + A[i])/3;
        if(min[0] > avg) {
            min[0] = avg;
            min[1] = i;
        }
    }

    // Last 2
    avg = (A[A.length - 2] + (A[A.length - 1]))/2;
    if(min[0] > avg) {
        min[0] = avg;
        min[1] = A.length - 2;
    }
    return min[1];
}

let sol = solution([4, 2, 2, 5, 1, 5, 8]);
console.log(JSON.stringify(sol));

// Brute-force solution
// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let prefixSum = calPrefixSum(A);
//     let sol = [];
//     let min = 999999999;

//     for (let i = 0; i < prefixSum.length - 1; i++) {
//         for(let j = i + 1; j < prefixSum.length; j++) {
//             let avg = avgSlice(prefixSum, i, j);
//             if (min > avg) {
//                 min = avg;
//             }
//         }
//         sol.push(min);
//     }

//     return sol.indexOf(Math.min(...sol));
// }

// function calPrefixSum(A) {
//     let prefixSum = [];
//     let sum = 0;
//     for(let i = 0; i < A.length; i++) {
//         sum += A[i];
//         prefixSum.push(sum);
//     }

//     return prefixSum;
// }

// function sliceSum(prefixSum, left, right) {
//     if(left === 0) {
//         return prefixSum[right];
//     }
//     return prefixSum[right] - prefixSum[(left - 1)];
// }

// function avgSlice(prefixSum, left, right) {
//     return sliceSum(prefixSum, left, right)/(right - left + 1);
// }

// let sol = solution([4, 2, 2, 5, 1, 5, 8]);

// console.log(sol);