function solution(mushrooms, k, m) {
    let sol = [];
    let walks = [];
    let max = 0;
    for(let i = 0; i < k; i++) {
        walks.push(walkLeft(k, m, i, mushrooms));
    }
    for(let i = k; i < mushrooms.length; i++) {
        walks.push(walkRight(k, m, i, mushrooms));
    }
    for( let i = 0; i < walks.length; i++) {
        if(max < walks[i][0]) {
            max = walks[i][0];
            sol = walks[i][1];
        }
    }
    return [max, sol];
}

function walkLeft(k, m, turningPoint, mushrooms) {
    let steps = [];
    let step = k;
    let total = 0;

    if(turningPoint > k) {
        return;
    }

    for(let i = 0; i < m; i++) {
        step--;
        if(step >= turningPoint) {
            steps.push(step);
            total += mushrooms[step];
        }
        else {
            let nextStep = turningPoint - step + turningPoint;
            if(nextStep > 0 && nextStep < mushrooms.length) {
                steps.push(nextStep);
            }

            // don't recount
            if (nextStep > k) {
                total += mushrooms[nextStep];
            }
        }
    }

    return [total, steps];
}

function walkRight(k, m, turningPoint, mushrooms) {
    let steps = [];
    let step = k;
    let total = 0;

    if(turningPoint < k) {
        return;
    }

    for(let i = 0; i < m; i++) {
        step++;
        if(step <= turningPoint) {
            steps.push(step);
            total += mushrooms[step];
        }
        else {
            let nextStep = turningPoint - step + turningPoint;
            if(nextStep > 0 && nextStep < mushrooms.length) {
                steps.push(nextStep);
            }

            // don't recount
            if (nextStep < k) {
                total += mushrooms[nextStep];
            }
        }
    }

    return [total, steps];
}

let sol = solution([2, 3, 7, 6, 1, 3, 9], 4, 6);