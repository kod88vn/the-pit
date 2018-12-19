function solution(A, B){
    // write your code in JavaScript (Node.js 8.9.4)
    let upstreamFish = [];
    let count = 0;

    for(let i = 0; i < A.length; i++) {
        // storing upsteam fish
        if(B[i] === 1) {
            upstreamFish.push(A[i]);
        } 
        // consider downstream fish a gainst stored upstream fish
        else {
            // if the downstream fish eat up all the upstream fish in store, it's alive and move on (counted)
            let last = (upstreamFish.length) ? upstreamFish[upstreamFish.length - 1] : null;
            while(upstreamFish.length !== 0 && last < A[i]) {
                upstreamFish.splice(-1, 1);
                last = upstreamFish[upstreamFish.length - 1];
            }

            if(upstreamFish.length === 0) {
                count++;
            }
        }
    }
    return upstreamFish.length + count;
}

let A = [4, 3, 2, 1, 5, 1, 2, 3];
let B = [0, 1, 0, 0, 1, 1, 0, 1];

let sol = solution(A, B);

console.log(JSON.stringify(sol));