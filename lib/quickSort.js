let quickSort = (nums) => {
  let right = [];
  let left = [];
  let pivot = nums[nums.length - 1];

  if (nums.length <= 1) {
    return nums;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else if (nums[i] > pivot) {
      right.push(nums[i])
    }
  }

  right = quickSort(right);
  left = quickSort(left);

  return left.concat(pivot, right);
}