/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let [start, end, maxLen] = [0, 0, 0];
    
    while(end < s.length) {
        set.has(s[end]) ? set.delete(s[start++]) : set.add(s[end++]);
        
        maxLen = Math.max(maxLen, set.size);
    }
    
    return maxLen;
};