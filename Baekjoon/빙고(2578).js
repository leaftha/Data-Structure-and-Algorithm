const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const board = [];

for (let i = 0; i < 5; i++) {
  board.push(input[i].trim().split(" ").map(Number));
}

const nums = [];

for (let i = 5; i < 10; i++) {
  nums.push(input[i].trim().split(" ").map(Number));
}

function cheack(arr) {
  let count = 0;
  if (
    arr[0][0] === 1 &&
    arr[1][1] === 1 &&
    arr[2][2] === 1 &&
    arr[3][3] === 1 &&
    arr[4][4] === 1
  ) {
    count++;
  }
  if (
    arr[0][4] === 1 &&
    arr[1][3] === 1 &&
    arr[2][2] === 1 &&
    arr[3][1] === 1 &&
    arr[4][0] === 1
  ) {
    count++;
  }

  return count;
}

function cheack2(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i][0] === 1 &&
      arr[i][1] === 1 &&
      arr[i][2] === 1 &&
      arr[i][3] === 1 &&
      arr[i][4] === 1
    ) {
      count++;
    }
    if (
      arr[0][i] === 1 &&
      arr[1][i] === 1 &&
      arr[2][i] === 1 &&
      arr[3][i] === 1 &&
      arr[4][i] === 1
    ) {
      count++;
    }
  }
  return count;
}

const visted = Array.from(Array(5), () => Array(5).fill(0));

let count = 0;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    count++;
    let a = 0;
    let b = 0;
    for (let k = 0; k < 5; k++) {
      if (board[k].includes(nums[i][j])) {
        a = k;
        b = board[k].indexOf(nums[i][j]);
      }
    }
    visted[a][b] = 1;
    let bingoCount = cheack(visted) + cheack2(visted);
    if (bingoCount >= 3) {
      console.log(count);
      i = 5;
      break;
    }
  }
}
