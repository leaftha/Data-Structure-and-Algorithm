const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();

let q = [];
let answer = Array.from(Array(n), () => Array(m).fill(-1));

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 2) {
      q.push([i, j, 0]);
    } else if (input[i][j] == 0) {
      answer[i][j] = 0;
    }
  }
}

let nxy = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];
let visted = Array.from(Array(n), () => Array(m).fill(true));
visted[q[0][0]][q[0][1]] = false;
while (q.length) {
  let [y, x, dist] = q.shift();
  answer[y][x] = dist;

  for (let [ny, nx] of nxy) {
    let dy = ny + y;
    let dx = nx + x;
    if (
      dy >= 0 &&
      dy < n &&
      dx >= 0 &&
      dx < m &&
      answer[dy][dx] === -1 &&
      input[dy][dx] !== 0 &&
      visted[dy][dx]
    ) {
      q.push([dy, dx, dist + 1]);
      visted[dy][dx] = false;
    }
  }
}

for (let arr of answer) {
  console.log(arr.join(" "));
}
