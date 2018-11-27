function solution(A) {
    let sol = 1;
    let freq = {};
    
    for(let i = 0; i< A.length; i++) {
        let val = A[i];
        
        if (sol === val) {
            sol += 1;
        }
        
        while (!!freq[sol]) {
            sol += 1;
        }
        
        if(!freq[val]) {
            freq[val] = 1;
        }
    }
    
    return sol;
}