// Basically, after a day, a cell is computed by XOR the adjacent cells. The boundary cells are considered 0

function cellCompete(states, days)
{
    // WRITE YOUR CODE HERE 
    let baseSet = states;
    let sol;
    for (let i = 0; i < days; i++) {
        sol = [];
        for(let j = 0; j < baseSet.length; j++) {
           let left, right;
           
           if(j === 0) left = 0;
           left = baseSet[j - 1];
           
           if(j === baseSet[baseSet.length - 1]) right = 0;
           right = baseSet[j + 1];
           
           sol.push(left^right);
        }
        
        for(let j = 0; j < baseSet.length; j++) {
           baseSet[j] = sol[j];
        }
        
        console.log(sol);
    }
    
    return sol;
}

let sol = cellCompete([1,0,0,0,0,1,0,0], 1);