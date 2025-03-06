const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map((el) => el.trim().split(" ").map(Number));
  .map((el) => el.trim());

const n = Number(input.shift());
const board = input.map((row) => row.split(""));

let answer = -1;

const findMax = (map) => {
  let max = 0;

  for (let i = 0; i < n; i++) {
    let rowCount = 1,
      colCount = 1;
    for (let j = 1; j < n; j++) {
      if (map[i][j] === map[i][j - 1]) {
        rowCount++;
      } else {
        max = Math.max(max, rowCount);
        rowCount = 1;
      }

      if (map[j][i] === map[j - 1][i]) {
        colCount++;
      } else {
        max = Math.max(max, colCount);
        colCount = 1;
      }
    }
    max = Math.max(max, rowCount, colCount);
  }

  return max;
};

answer = findMax(board);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j + 1 < n) {
      [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
      answer = Math.max(answer, findMax(board));
      [board[i][j + 1], board[i][j]] = [board[i][j], board[i][j + 1]];
    }

    if (i + 1 < n) {
      [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
      answer = Math.max(answer, findMax(board));

      [board[i + 1][j], board[i][j]] = [board[i][j], board[i + 1][j]];
    }
  }
}

console.log(answer);
