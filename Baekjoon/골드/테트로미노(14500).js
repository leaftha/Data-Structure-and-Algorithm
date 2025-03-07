const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

const blocks = [
  [
    [
      [1, 1],
      [1, 1],
    ],
  ],

  [[[1, 1, 1, 1]], [[1], [1], [1], [1]]],

  [
    [
      [1, 0],
      [1, 0],
      [1, 1],
    ],
    [
      [1, 1, 1],
      [1, 0, 0],
    ],
    [
      [1, 1, 1],
      [0, 0, 1],
    ],
    [
      [1, 1],
      [1, 0],
      [1, 0],
    ],
    [
      [0, 1],
      [0, 1],
      [1, 1],
    ],
    [
      [1, 1],
      [0, 1],
      [0, 1],
    ],
    [
      [1, 0, 0],
      [1, 1, 1],
    ],
    [
      [0, 0, 1],
      [1, 1, 1],
    ],
  ],

  [
    [
      [1, 0],
      [1, 1],
      [0, 1],
    ],
    [
      [0, 1],
      [1, 1],
      [1, 0],
    ],
    [
      [1, 1, 0],
      [0, 1, 1],
    ],
    [
      [0, 1, 1],
      [1, 1, 0],
    ],
  ],

  [
    [
      [1, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [0, 1],
    ],
  ],
];

let max = 0;

const counter = (block, row, col, x, y) => {
  if (x + row > input.length || y + col > input[0].length) return -1;
  let add = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      add += input[x + i][y + j] * block[i][j];
    }
  }
  return add;
};

for (let block of blocks) {
  for (let num of block) {
    let row = num.length;
    let col = num[0].length;
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        max = Math.max(max, counter(num, row, col, i, j));
      }
    }
  }
}

console.log(max);
