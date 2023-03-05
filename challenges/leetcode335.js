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