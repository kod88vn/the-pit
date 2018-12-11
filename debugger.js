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