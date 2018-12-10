// O(N + M) 
function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sol = [];
    let occurencesList = [];
    let nucleotides = S.split('');
    let impactFactors = nucleotides.map(n => {
        switch(n) {
            case 'A': return 1;
            case 'C': return 2;
            case 'G': return 3;
            case 'T': return 4;
        }
    });

    let occurences = [0, 0, 0, 0];
    occurencesList.push([...occurences]);
    for(let i = 0; i < impactFactors.length; i++) {
        for(let j = 0; j < 4; j++) {
            if(impactFactors[i] - 1 === j) {
                occurences[j]++;
                occurencesList.push([...occurences]);
            }
        }
    }

    for (let i = 0; i < P.length; i++) {
        let p = P[i];
        let q = Q[i];

        for(let j = 0; j < 4; j++) {
            if(occurencesList[q + 1][j] - occurencesList[p][j] > 0) {
                sol.push(j + 1);
                break;
            }
        }
    }
    return sol;
}

let P = [2, 5, 0];
let Q = [4, 5, 6];
sol = solution('CAGCCTA', P, Q);

console.log(JSON.stringify(sol));