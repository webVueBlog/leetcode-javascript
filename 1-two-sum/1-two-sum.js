/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash={}
  for(let i=0;i<nums.length;i++){
    if(hash[nums[i]]!=null){
      return [hash[nums[i]],i]
    }
    hash[target-nums[i]]=i
  }
};