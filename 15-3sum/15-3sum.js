/**
 * @param {number[]} nums
 * @return {number[][]}
 * 1.暴力解法
 * 三重循环
 * 
 * 2.双指针法
 * 关键字：不可以包含重复
 * 模式识别：利用排序避免重复答案
 * 降低复杂度变成twoSum
 * 利用双指针找到所有解
 * 
 * 先将数组进行排序，自左向右进行搜索，从小到大搜索，跳过重复值
 * 找到目标和，加入解
 * 移动指针
 * 如果和比目标值小，移动头指针，否则移动右指针
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const ans = [];
    
    for (let i = 0; i < n - 2; i++) {
        if (nums[i] === nums[i - 1]) continue;
        
        let [l, r] = [i + 1, n - 1];
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (!sum) {
                ans.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[++l]);
                while (l < r && nums[r] === nums[--r]);
            }
            
            else sum < 0 ? l++ : r--;
        }
    }
    
    return ans;
};