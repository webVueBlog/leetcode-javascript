/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const ans = [];
    
    const backtrack = (start = 1, path = []) => {
        if (path.length === k) return ans.push([...path]);
        
        for (let i = start; i <= n; i++) {
            backtrack(i + 1, [...path, i]);
        }
    }
    
    backtrack();
    
    return ans;
};