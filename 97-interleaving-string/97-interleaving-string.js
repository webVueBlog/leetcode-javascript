/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const [n, m] = [s1.length + 2, s2.length + 2];
    if (m + n - 4 !== s3.length) return false;
    
    const dp = new Uint8Array(m);
    dp[1] = 1;
    
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            const up = dp[j] && s1[i - 2] === s3[i + j - 3];
            const left = dp[j - 1] && s2[j - 2] === s3[i + j - 3]
            dp[j] = up || left;
        }
    }
    
    return dp[m - 1];
};