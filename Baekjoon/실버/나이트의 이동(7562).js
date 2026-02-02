const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [N] = input.shift();

let idx = 0;

let move = [
  [2, 1],
  [1, 2],
  [-2, 1],
  [-1, 2],
  [2, -1],
  [1, -2],
  [-2, -1],
  [-1, -2],
];

let answer = [];

for (let _ = 0; _ < N; _++) {
  let [size] = input[idx];
  let cur = input[idx + 1];
  let goal = input[idx + 2];
  let q = [[...cur, 0]];
  const visited = Array.from({ length: size }, () => Array(size).fill(false));

  while (q.length) {
    let [y, x, count] = q.shift();
    if (y === goal[0] && x === goal[1]) {
      answer.push(count);
      break;
    }
    for (let [ny, nx] of move) {
      let ey = ny + y;
      let ex = nx + x;

      if (ey >= 0 && ey < size && ex >= 0 && ex < size && !visited[ey][ex]) {
        visited[ey][ex] = true;
        q.push([ey, ex, count + 1]);
      }
    }
  }

  idx += 3;
}
console.log(answer.join("\n"));
