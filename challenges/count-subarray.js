/*
  *  A fixed-bound subarray of nums is a subarray that satisfies the following conditions:
  *
  *  The minimum value in the subarray is equal to minK.
  *  The maximum value in the subarray is equal to maxK.
  *  Return the number of fixed-bound subarrays.
  *
  * A subarray is a contiguous part of an array.
*/

let countSubarrays = (nums, minK, maxK) => {
  let result = 0;
  let minKPresent = false;
  let maxKPresent = false;
  let left = 0;
  let right = 0;

  while (left < nums.length) {
    let num = nums[right];

    if (num === minK) {
      minKPresent = true;
    } else if (num === maxK) {
      maxKPresent = true;
    }

    if (num < minK || num > maxK) {
      left = right + 1;
      minKPresent = false;
      maxKPresent = false;
    }

    if (minKPresent && maxKPresent) {
      result++;
    }

    right++;

    if (right === nums.length) {
      left++;
      right = 0;
    }
  }

  return result;
};
