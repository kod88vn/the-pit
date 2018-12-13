function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    let queue = [];
    let count = 0;

    for(let i = 0; i < H.length; i++) {
        let val = H[i];
        let last = queue[queue.length - 1];

        while (queue.length !== 0 && val < last) {
            queue.splice(-1, 1);
            last = queue[queue.length - 1];
            count++;
        }
        if(val > last || queue.length === 0) {
            queue.push(val);
        }
    }
    return queue.length + count;
}