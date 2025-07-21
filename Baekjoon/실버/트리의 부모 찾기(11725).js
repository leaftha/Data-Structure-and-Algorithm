const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const edges = input.slice(1).map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: n + 1 }, () => []);
edges.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});

const parent = Array(n + 1).fill(0);

const visited = Array(n + 1).fill(false);
const queue = [1];
visited[1] = true;

while (queue.length) {
  const cur = queue.shift();

  for (const next of graph[cur]) {
    if (!visited[next]) {
      visited[next] = true;
      parent[next] = cur;
      queue.push(next);
    }
  }
}

const result = [];
for (let i = 2; i <= n; i++) {
  result.push(parent[i]);
}
console.log(result.join("\n"));
