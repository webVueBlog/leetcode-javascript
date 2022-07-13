/**
 * @param {number[]} nums
 * @return {number[][]}
 * 广度优先遍历
 * 深度优先遍历
 */
var permute = function(nums) {
    nums.sort((a, b) => a - b);
    const ans = [];
    
    const backtrack = (path = []) => {
        if (path.length === nums.length) return ans.push([...path]);
        
        nums.forEach(num => {
            if (!path.includes(num)) backtrack([...path, num]);
        })
    }
    
    backtrack();
    
    return ans;
};