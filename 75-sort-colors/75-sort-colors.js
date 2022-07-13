/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 思路：借助快速排序 partition 过程的一趟扫描法
 * 回顾快速排序 partition 过程：随机选择一个元素作为切分元素（pivot），然后经过一次扫描，通过交换不同位置的元素使得数组按照数值大小分成以下3个部分：<pivot ==pivot >pivot
 */
var sortColors = function(nums) {
    let [i, l, r] = [0, 0, nums.length - 1];
    
    while (i <= r) {
        if (!nums[i]) [nums[i++], nums[l++]] = [nums[l], nums[i]];
        else if (nums[i] === 2) [nums[i], nums[r--]] = [nums[r], nums[i]];        
        else i++;                                    
    }                        
};