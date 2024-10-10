const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
// .map((el) => el.trim().split(" "));

let [n, m] = input.shift();

const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

for (let i = 1; i <= n; i++) {
  dist[i][i] = 0;
}

for (let [a, b, c] of input) {
  dist[a][b] = c;
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (dist[i][k] + dist[k][j] < dist[i][j]) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

let answer = Infinity;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i !== j && dist[i][j] !== Infinity && dist[j][i] !== Infinity) {
      answer = Math.min(answer, dist[i][j] + dist[j][i]);
    }
  }
}

console.log(answer !== Infinity ? answer : -1);
