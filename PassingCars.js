function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let canBegin = false;
    let multiplier = 0;
    let sol = 0;
    
    for (let i = 0; i< A.length; i++) {
        let val = A[i];
        
        if(val === 0) {
            canBegin = true;
        }
        
        if(!canBegin) continue;
        
        if(val === 0) multiplier += 1;
        
        if(val === 1) sol += multiplier * val;

        if (sol > 1000000000){
            return -1;
        }
    }

    return sol;
}

console.log(solution([0, 1, 0, 1, 1] ));