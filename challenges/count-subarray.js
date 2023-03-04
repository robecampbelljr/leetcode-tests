/*
  *  A fixed-bound subarray of nums is a subarray that satisfies the following conditions:
  *
  *  The minimum value in the subarray is equal to minK.
  *  The maximum value in the subarray is equal to maxK.
  *  Return the number of fixed-bound subarrays.
  *
  * A subarray is a contiguous part of an array.
*/

var countSubarrays = function(nums, minK, maxK) {
  let result = 0;

  nums.forEach((num, index) => {
    let numberIsInBounds = true;
    let minKPresent = false;
    let maxKPresent = false;
    let j = index;

    while(j < nums.length && numberIsInBounds) {

      let num = nums[j];

      if (!minKPresent && num === minK) {
        minKPresent = true;
      }

      if (!maxKPresent && num === maxK) {
        maxKPresent = true;
      }

      if (num < minK || num > maxK) {
        numberIsInBounds = false;
      }

      if (minKPresent && maxKPresent && numberIsInBounds) {
        result++;
      }

      j++;
    }
  })

  return result;
};