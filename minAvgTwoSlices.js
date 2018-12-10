function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let prefixSum = calPrefixSum(A);
    let sol = [];
    let min = 999999999;

    for (let i = 0; i < prefixSum.length - 1; i++) {
        for(let j = i + 1; j < prefixSum.length; j++) {
            let avg = avgSlice(prefixSum, i, j);
            if (min > avg) {
                min = avg;
            }
        }
        sol.push(min);
    }

    return sol.indexOf(Math.min(...sol));
}

function calPrefixSum(A) {
    let prefixSum = [];
    let sum = 0;
    for(let i = 0; i < A.length; i++) {
        sum += A[i];
        prefixSum.push(sum);
    }

    return prefixSum;
}

function sliceSum(prefixSum, left, right) {
    if(left === 0) {
        return prefixSum[right];
    }
    return prefixSum[right] - prefixSum[(left - 1)];
}

function avgSlice(prefixSum, left, right) {
    return sliceSum(prefixSum, left, right)/(right - left + 1);
}

let sol = solution([4, 2, 2, 5, 1, 5, 8]);

console.log(sol);