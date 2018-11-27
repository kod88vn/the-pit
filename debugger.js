function solution(A, B, C) {
    // write your code in JavaScript (Node.js 8.9.4)
    let temp = [];
    let sol = [];
    let sumFreq = {};
    let dupCount = 0;
    for(let i = 0; i< A.length; i++) {
        for(let j = 0; j< B.length; j++) {
            for(let k = 0; k< C.length; k++) {
                temp.push([A[i], B[j], C[k]]);
            }
        }
    }
    
    for (let i = 0; i < temp.length; i++) {
        let sum = 0;

        if(temp[i][0] === temp[i][1] || temp[i][0] === temp[i][2] || temp[i][1] === temp[i][2]) {
            continue;
        }
        
        for(let j = 0; j < 3; j++) {
            sum += temp[i][j];
        }
        
        if(!sumFreq[sum]) {
            sumFreq[sum] = 1;
        } else {
            dupCount++;
        }
        
        
        sol.push(temp[i]);
    }
    
    return sol.length - dupCount;
}

console.log(solution([29, 50], [61, 37], [37, 70]) );
