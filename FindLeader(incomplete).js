function findLeader(A) {
    let queue = [];
    // A.sort((a, b) => a > b);

    for(let i = 0; i < A.length; i++) {
        queue.push(A[i]);

        if(queue.length >= 2 && queue[queue.length - 1] !== queue[queue.length - 2]) {
            queue.splice(-2, 2);
        }
    }
    
    if(queue.length) {
        return queue[0];
    }
}