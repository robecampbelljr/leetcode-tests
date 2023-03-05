/*
 *  There are n people standing in a line labeled from 1 to n. The first person in the line is holding a pillow * initially. Every second, the person holding the pillow passes it to the next person standing in the line. Once the * pillow reaches the end of the line, the direction changes, and people continue passing the pillow in the opposite * direction.
 *
 * For example, once the pillow reaches the nth person they pass it to the n - 1th person, then to the n - 2th person and so on.
 * Given the two positive integers n and time, return the index of the person holding the pillow after time seconds.
*/

let passThePillow = (n, time) => {
  let count = 0;
  let index = 0;
  let line = new Array(n);
  let fwd = true;

  line[0] = '*';

  while (count < time) {

    if (fwd) {
      line[index] = '';
      line[index+1] = '*';
      index++;
    } else {
      line[index] = '';
      line[index-1] = '*';
      index--;
    }

    if (index === 0) {
      fwd = true;
    } else if (index === line.length - 1) {
      fwd = false;
    }

    count++;
  }

  return index+1;
}

/*
You are given the root of a binary tree and a positive integer k.

The level sum in the tree is the sum of the values of the nodes that are on the same level.

Return the kth largest level sum in the tree (not necessarily distinct). If there are fewer than k levels in the tree, return -1.

Note that two nodes are on the same level if they have the same distance from the root.
*/

var kthLargestLevelSum = function(root, k) {
  let result = -1;
  let levelSorted = [];
  let left = 0;
  let right = 1;

  let quickSort = (arr) => {
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    if (arr.length <= 1) {
      return arr;
    }

    arr.forEach((num) => {
      if (num < pivot) {
        left.push(num);
      } else if (num > pivot) {
        right.push(num);
      }
    })

    return [...quickSort(right), pivot, ...quickSort(left)];
  }

  while (right <= root.length) {
    levelSorted.push(root.slice(left, right));
    left = right;
    let nextRight = (right * 2) + 1;
    if (nextRight > root.length){
      if (right === root.length) {
        right++;
      } else {
        right = root.length;
      }
    } else {
      right = nextRight;
    }
  }

  let levelSums = levelSorted.map((level) => {
    return level.reduce((sum, num) => {
      return sum + num;
    }, 0)
  })

  let sortedSums = quickSort(levelSums);

  console.log(`k: ${k} Sorted: ${JSON.stringify(sortedSums)}`);

  if (sortedSums[k-1]) {
    return sortedSums[k-1];
  } else {
    return -1;
  }
};

/*
  You are given a 0-indexed integer array nums of length n.

A split at an index i where 0 <= i <= n - 2 is called valid if the product of the first i + 1 elements and the product of the remaining elements are coprime.

For example, if nums = [2, 3, 3], then a split at the index i = 0 is valid because 2 and 9 are coprime, while a split at the index i = 1 is not valid because 6 and 3 are not coprime. A split at the index i = 2 is not valid because i == n - 1.
Return the smallest index i at which the array can be split validly or -1 if there is no such split.

Two values val1 and val2 are coprime if gcd(val1, val2) == 1 where gcd(val1, val2) is the greatest common divisor of val1 and val2.
  Input: nums = [4,7,8,15,3,5]
  Output: 2

  Input: nums = [4,7,15,8,3,5]
  Output: -1
*/

var findValidSplit = function(nums) {

};

/*
There is a test that has n types of questions. You are given an integer target and a 0-indexed 2D integer array types where types[i] = [counti, marksi] indicates that there are counti questions of the ith type, and each one of them is worth marksi points.

Return the number of ways you can earn exactly target points in the exam. Since the answer may be too large, return it modulo 109 + 7.

Note that questions of the same type are indistinguishable.

For example, if there are 3 questions of the same type, then solving the 1st and 2nd questions is the same as solving the 1st and 3rd questions, or the 2nd and 3rd questions.

Input: target = 6, types = [[6,1],[3,2],[2,3]]
Output: 7
Input: target = 5, types = [[50,1],[50,2],[50,5]]
Output: 4
Input: target = 18, types = [[6,1],[3,2],[2,3]]
Output: 1
*/

var waysToReachTarget = function(target, types) {

};