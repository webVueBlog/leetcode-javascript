/**
 * @param {number[]} height
 * @return {number}
 * 1.暴力解法
 * 遍历左右边
 * 找出所有面积
 * 取最大
 * 
 * 2.双指针法
 * 关键字：左右两边
 * 模式识别：需要移动左右两头的问题可以考虑双指针
 * 难点：如何移动指针
 * 相同情况下两边距离越远越好
 * 区域受限于较短边
 */
var maxArea = function(height) {
    let [l, r, maxArea] = [0, height.length - 1, 0];
    
    while (l < r) {
        const [lh, rh] = [height[l], height[r]];
        maxArea = Math.max(maxArea, Math.min(lh, rh) * (r - l));
        
        lh < rh ? l++ : r--;
    }
    
    return maxArea;
};