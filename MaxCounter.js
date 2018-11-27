function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const l = A.length;
    const sol = [];
    let max = 0;
    let min = -1;
    
    for(let j = 0; j < N; j++) {
        sol[j] = 0;
    }
    
    for (let i = 0; i < l; i++) {
        let val = A[i];
        var solIndex = val - 1;
        
        if(val <= N) {
            if (sol[solIndex] < min) {
                sol[solIndex] = min + 1;
            } else {
                sol[solIndex] += 1;
            }
            
            if(sol[solIndex] > max) {
                max = sol[solIndex];
            }
        } else {
            min = max;
        }
    }
    
    if (min > -1) {
        for(let j = 0; j < N; j++) {
            if(sol[j] < min) {
                sol[j] = min;
            }
        }
    }
    
    return sol;
}