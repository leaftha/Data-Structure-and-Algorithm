const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, r, c] = input.shift();

let count = 0;
const recur = (row, col, size) => {
  if (row === r && col === c) {
    console.log(count);
    return;
  }
  if (r >= row && r < row + size && c >= col && c < col + size) {
    size = Math.floor(size / 2);
    recur(row, col, size);
    recur(row, col + size, size);
    recur(row + size, col, size);
    recur(row + size, col + size, size);
  } else count += size * size;
};

recur(0, 0, Math.pow(2, n));
