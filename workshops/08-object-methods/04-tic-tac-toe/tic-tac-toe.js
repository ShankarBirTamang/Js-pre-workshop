// YOUR CODE BELOW
let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],

  move: function (givenChar, rowNum, colNum) {
    if (this.board[rowNum][colNum]===null) {
      this.board[rowNum][colNum] = givenChar;
    }

    return this.board;
  },

  clear: function () {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    return this.board;
  },
};
// ticTacToe.move("x", 0, 1);
// ticTacToe.move("O", 0, 1);
// ticTacToe.move("x", 1, 1);
// ticTacToe.move("O", 2, 1);
// ticTacToe.move("x", 2, 2);
