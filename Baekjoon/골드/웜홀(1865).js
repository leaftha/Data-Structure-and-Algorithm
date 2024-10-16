const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));

let TC = input.shift()[0];
let idx = 0;

function bellmanFord(N, edges) {
  const INF = Infinity;
  const distances = Array(N + 1).fill(INF);

  distances[0] = 0;
  let extendedEdges = [...edges];
  for (let node = 1; node <= N; node++) {
    extendedEdges.push([0, node, 0]);
  }
  for (let i = 1; i <= N; i++) {
    for (const [u, v, w] of extendedEdges) {
      if (distances[u] !== INF && distances[u] + w < distances[v]) {
        distances[v] = distances[u] + w;
      }
    }
  }

  for (const [u, v, w] of extendedEdges) {
    if (distances[u] !== INF && distances[u] + w < distances[v]) {
      return true;
    }
  }

  return false;
}

for (let t = 0; t < TC; t++) {
  const [N, M, W] = input[idx];
  idx++;

  let edges = [];

  for (let i = 0; i < M; i++) {
    const [S, E, T] = input[idx];
    edges.push([S, E, T]);
    edges.push([E, S, T]);
    idx++;
  }

  for (let i = 0; i < W; i++) {
    const [S, E, T] = input[idx];
    edges.push([S, E, -T]);
    idx++;
  }

  const hasNegativeCycle = bellmanFord(N, edges);
  console.log(hasNegativeCycle ? "YES" : "NO");
}
