/*
 * @param {number[][]} board
 * @return {number}
 */
let snakesAndLadders = function (board) {
  let numOfMoves = 0;
  // determine the end of the array
  let row = board.length - 1;
  // calculate if it is even or an odd number
  let boustroRow = row % 2;
  // set "curr"(ent) location to 1 (the first element in the last row of the matrix)
  let curr = {
    row: row,
    col: 0,
    position: 1
  }
  // while location is not the end of the board
  while (curr.position !== (board[0].length * board.length)) {
    // determine "next" move 1-6 spaces
    // if there is a snake or a ladder at "next"
      // move to that location
    // else go to "next"
    // increment numOfMoves
    curr.position ++;
    numOfMoves += 1;
  }

  return numOfMoves;
};