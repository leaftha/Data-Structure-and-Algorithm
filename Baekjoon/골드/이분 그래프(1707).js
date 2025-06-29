const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let [n] = input.shift();

let idx = 0;
for (let i = 0; i < n; i++) {
  let [a, b] = input[idx];
  let g = {};

  for (let j = 1; j <= a; j++) {
    g[j] = [];
  }
  for (let j = 0; j < b; j++) {
    let [s, e] = input[idx + j + 1];
    g[s].push(e);
    g[e].push(s);
  }

  let visted = Array(a + 1).fill(0);

  const bfs = (g, s) => {
    let q = [s];
    visted[s] = 1;
    while (q.length) {
      let e = q.shift();
      let color = visted[e];
      for (let ne of g[e]) {
        if (visted[ne] === 0) {
          visted[ne] = color === 1 ? 2 : 1;
          q.push(ne);
        } else if (color === visted[ne]) {
          return false;
        }
      }
    }
    return true;
  };
  let isFalse = false;
  for (let j = 1; j <= a; j++) {
    if (visted[j] === 0) {
      if (!bfs(g, j)) {
        console.log("NO");
        isFalse = true;
        break;
      }
    }
  }
  if (!isFalse) {
    console.log("YES");
  }
  idx += b + 1;
}
