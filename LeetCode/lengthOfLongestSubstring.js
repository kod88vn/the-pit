/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let dict = {};
    let chars = s.split('');
    let count = 0;
    let max = 0;
    for (let j = 0; j < chars.length; j ++) {
        for(let i = j; i < chars.length; i++) {
            let c = chars[i];
            if(!dict[c]) {
                dict[c] = 1;
                count++;
            } else {
                if(count > max) max = count;
                count = 0;
                dict = {};
                break;
            }
        }
    }
    
    return max;
};