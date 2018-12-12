// Biggest numbers are at the 2 ends. However, the nagetives are only good if they provide a pair.
// Special case is there are only negative numbers, in which the final result have to be negative, the we only consider the biggest

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let bottomThree = [9999999, 9999999, 999999];
    let topThree = [-9999999, -9999999, -999999];
    let max = 0;

    if(A.length === 3) {
        return A[0]*A[1]*A[2];
    }
    
    
    for(let i = 0; i < A.length; i++) {
        bottomThree.push(A[i]);
        bottomThree.sort((a,b) => a > b);
        bottomThree.splice(-1,1);
        
        topThree.push(A[i]);
        topThree.sort((a,b) => a > b);
        topThree.splice(0,1);
    }

    let a = bottomThree[0];
    let b = bottomThree[1];

    // if all are negative. Multiply the biggests
    if(topThree[2] < 0) {
        topThree[0]*topThree[1]*topThree[2];
    }
    
    // consider a pair of biggest negatives
    if(a * b > 0) {
        max = a*b*topThree[2];
    }
    
    // then consider only the biggest
    if(topThree[0]*topThree[1]*topThree[2] > max) {
        max = topThree[0]*topThree[1]*topThree[2];
    }
    
    return max;
}

// let sol = solution([-3, 1, 2, -2, 5, 6]);
let sol = solution([-5, -6, -4, -7, -10]);
console.log(JSON.stringify(sol));