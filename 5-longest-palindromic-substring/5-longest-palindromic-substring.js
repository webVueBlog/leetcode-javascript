/**
 * @param {string} s
 * @return {string}
 * 子串（substring）：原始字符串的一个连续子集；
 * 子序列（subsequence）：原始字符串的一个子集。
 * 1.暴力解法
 * 首先先做一个特殊的判断，由于截取字符串有一定的性能消耗
 * 所以只需要记录最长回文子串的起始下标，和它的长度，最后输出的时候，做截取就可以了
 * 在枚举的时候，只需要枚举长度大于等于2，并且超过了当前得到的最长回文子串长度的那些子串，因此，左边界只需要枚举到倒数第二个位置，右边界从左边界加1的位置开始枚举
 * 判断s[left...right] 是否为回文串
 * 最后做子串的截取
 * 2.中心扩散法
 * 枚举所有可能的回文子串的中心位置
 * 中心位置可能是一个字符，也有可能是两个相邻的字符
 * 记录最长回文子串的相关变量
 * 奇数回文子串
 * 偶数回文子串
 * 首先依然是做特殊的判断，记录最长回文子串的相关变量，如起始下标，和它的maxLen最大长度
 * 枚举回文子串的位置，最后一个位置没有必要枚举了，因为它不可能再向右边扩散，即len-2
 * 当left=right的时候，回文中心是一个字符，回文串的长度是奇数
 * 当right=left+1的时候，此时回文中心两个字符，回文串的长度是偶数
 * 跳出while循环时，恰好满足 s.charAt(i) != s.charAt(j)
 * 回文串的长度是 j-i+1-2=j-i-1
 * 奇数回文子串
 * A   A   B   C   B   A
 * 0   1   2   3   4   5
 *   beign     i
 *         len = 5
 * beign = i - (len - 1) / 2
 * 3.动态规划
 * 一个回文去掉两头以后，剩下的部分依然是回文。回文长度严格大于2
 * 状态：dp[i][j] 表示子串s[i..j]是否为回文子串
 * 得到状态转移方程：dp[i][j] = (s[i]==s[j]) and dp[i+1][j-1]
 * 边界条件：j-1-(i+1)+1<2,整理得j-i<3 <=> j-i+1<4
 * s[i..j]长度为2或者3时，不用检查子串是否回文
 * 初始化: dp[i][i]=true
 * 输出：在得到一个状态的值为true的时候，记录起始位置和长度，填表完成以后再截取
 * 状态转移方程：dp[i][j] = (s[i] == s[j]) and (j-i<3 or dp[i+1][j-1])
 * 4.Manacher算法
 * 
 */
var longestPalindrome = function(s) {
    const n = s.length;
    let [start, maxLen] = [0, 1];
    
    const expendAroundMiddle = (left, right) => {
        while (left >= 0 && right < n && s[left] === s[right]) {
            const currLen = right - left + 1;
            if (currLen > maxLen) {
                maxLen = currLen;
                start = left;
            }
            
            left--;
            right++;
        }
    }
    
    for (let i = 0; i < n; i++) {
        expendAroundMiddle(i, i);
        expendAroundMiddle(i, i + 1);
    }
    
    return s.slice(start, start + maxLen);
};