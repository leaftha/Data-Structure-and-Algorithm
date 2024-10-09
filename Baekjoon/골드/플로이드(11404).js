const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
// .map((el) => el.trim());

let [n] = input.shift();
let [m] = input.shift();

const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

for (let i = 1; i <= n; i++) {
  dist[i][i] = 0;
}

for (let [p, n, c] of input) {
  if (c < dist[p][n]) {
    dist[p][n] = c;
  }
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    for (let k = 1; k <= n; k++) {
      if (dist[j][i] + dist[i][k] < dist[j][k]) {
        dist[j][k] = dist[j][i] + dist[i][k];
      }
    }
  }
}

for (let i = 1; i <= n; i++) {
  let arr = [];
  for (let j = 1; j <= n; j++) {
    if (dist[i][j] === Infinity) {
      arr.push(0);
    } else {
      arr.push(dist[i][j]);
    }
  }
  console.log(arr.join(" "));
}
