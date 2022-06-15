/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s === '') return 0
    let map = new Map()
    let startIdx = 0
    let max = 0
    for(let i = 0; i < s.length; i++) {
        let cur = s[i]
        if(map.has(cur) && map.get(cur) >= startIdx) {
            startIdx = map.get(cur) + 1
        }
        map.set(cur, i)
        max = Math.max(max, i-startIdx+1)
    }
    return max
};