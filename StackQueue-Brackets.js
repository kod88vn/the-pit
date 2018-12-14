function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let queue = [];
    for(let i = 0; i < S.length; i++) {
        if(!queue.length) {
            queue.push(S[i]);
            continue;
        }
        
        let l = queue.length;
        let last = queue[l - 1];
        if(last === '[' && S[i] === ']' || last === '(' && S[i] === ')' || last === '{' && S[i] === '}') {
            queue.splice(-1, 1);
        } else {
            queue.push(S[i]);
        }
    }
    
    if (queue.length === 0) {
        return 1;
    } else {
        return 0;
    }
}

let sol = solution('{[()()]}');

console.log(JSON.stringify(sol));