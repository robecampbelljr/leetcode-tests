/*
  Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
  Return the running sum of nums.
 */

var runningSum = function(nums) {

  let sums = [];

  nums.reduce((sum, num) => {
    sums.push(sum + num);
    return sum + num
  }, 0);

  return sums;

};