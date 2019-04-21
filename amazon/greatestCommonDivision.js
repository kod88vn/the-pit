// Find the largest possible integer that the whole array can divide with 0 remainder

function generalizedGCD(num, arr)
{
    // WRITE YOUR CODE HERE
    let sol = 1;
    let max = 0;
    let candidate = sol + 1;
    
    for( let i = 0; i < num; i++) {
        let val = arr[i];
        if(max < val) max = val;
    }
    
    while (candidate < max) {
        let isFailed = false;
        for(let i = 0; i < num; i++) {
            let val = arr[i];
            if(val%candidate !== 0) {
                isFailed = true;
                break;
            }
        }
        if(!isFailed) {
            sol = candidate++;
        }
        candidate++;
    }
    return sol;
}

let sol = generalizedGCD(5,[2,3,4,5,6]);