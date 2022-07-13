/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 1.暴力求解
 * 利用数组有序的特点从头到尾遍历一次数组
 * 在遍历的开始，检查遍历到的元素是否等于target，遇到刚好等于target的时候，记录当前的位置
 * 接着遍历，检查遍历的元素是否不等于target，遇到刚好不等于target的时候，记录当前位置的前一个位置即可
 * 2.二分查找
 * 二分查找的基本思想：在一个区间范围里看处在中间位置的元素的值 nums[mid] 与目标元素 target 的大小关系，进而决定目标值落在哪一个部分里
 * 目标元素 target 在有序数组中很可能存在多个；
 * 使用二分查找方法看到的处在中间位置的元素的值 nums[mid] 恰好等于目标元素 target 的时候，还要继续查找下去；
 * 此时比较容易陷入的误区是线性查找，正确的做法是继续二分查找。
 * 伪代码：
 * 先将数组的长度赋值为变量len，然后处理特殊的情况，如果数组的长度为0，那么将数组[-1,-1]返回。
 * 然后查找目标元素在有序数组中出现的第一个位置
 * firstPosition = findFirstPosition(nums, target)
 * 如果第一个位置都没有找到的话，目标元素在数组中并不存在，那么[-1,-1]返回
 * 接着查找目标元素在数组中最后一次出现的位置
 * 如果找到了位置，那么返回 [firstPosition, lastPosition]

firstPosition(nums, target) {
 let = 0
 right = nums.length - 1;
 while(left < right) {
  mid = (left + right) >>> 1;
  if(nums[mid] < target) {
   // 下一轮搜索的区间是 [mid+1, right]
   left = mid + 1;
  } else if (nums[mid] == target) {
   // 下一轮搜索的区间是 [left, mid]
   right = mid
  } else {
   // nums[mid] > target
   // 下一轮搜索的区间是 [left, mid-1]
   right = mid - 1;
  }
 }
 // 不能保证目标元素在这个数组中，一定能出现
 if (nums[left] == target) {
  return left;
 }
 // 否则返回-1，找不到
 return -1;
}
 */
var searchRange = function(nums, target) {
    let [start, end] = [0, nums.length - 1];
    
    while (start <= end) {
        const mid = (start + end) >>> 1;
        if (nums[mid] === target) {
            [start, end] = [mid, mid];
            break;
        }
        
        nums[mid] > target ? (end = mid - 1) : (start = mid + 1);
    }
    
    while (nums[start - 1] === target) start--;
    while (nums[end + 1] === target) end++;
    
    return start > end ? [-1, -1] : [start, end];
};