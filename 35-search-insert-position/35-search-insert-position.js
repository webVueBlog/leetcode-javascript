/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 1.二分查找
 * 先设定左侧下标left和右侧下标right，再计算中间下标mid
 * 每次根据nums[mid]和target之间的大小进行判断，相等则直接返回下标，nums[mid] < target 则 left 右移，nums[mid] > target 则 right 左移
 * 查找结束如果没有相等值则返回 left, 该值为插入位置
 */
var searchInsert = function(nums, target) {
    let [left, right] = [0, nums.length - 1];
    
    while (left <= right) {
        const mid = (left + right) >>> 1;
        if (nums[mid] === target) return mid;
        
        if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    
    return left;
};