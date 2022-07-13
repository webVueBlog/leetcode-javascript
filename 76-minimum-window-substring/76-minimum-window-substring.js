/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 子串强调了[连续性]
 * T中可能包含重复字符
 * 1.暴力解法
 * 枚举输入字符串S的所有长度大于等于T的子串
 * 逐个判断这些子串中，哪些子串覆盖了字符串T的所有字符；
 * 在枚举的过程中，记录符合条件的，长度最短的那个子串。
 * 
 * 如何判断S的子串包含了T中的所有字符？
 * 参考做法：分别统计S的子串和T中每个字符出现的次数，然后逐个比对。
 * 字符频数数组
 */
var minWindow = function(s, t) {
    const cnt = new Array(128).fill(0);
    let [start, end] = [-Infinity, Infinity];
    let [left, right, count] = [0, 0, t.length];
    
    for (let i = 0; i < t.length; i++) 
        cnt[t.charCodeAt(i)]++;
    
    while (right < s.length) {
        if (cnt[s.charCodeAt(right)]-- > 0) count--;
        
        while (!count) {
            if (end - start > right - left) [start, end] = [left, right];
            if (++cnt[s.charCodeAt(left++)] > 0) count++;
        }
        
        right++;
    }
    
    return end === Infinity ? '' : s.substring(start, end + 1);
};