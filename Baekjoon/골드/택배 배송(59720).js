class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.heap[p][1] <= this.heap[i][1]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    while (true) {
      let l = i * 2 + 1,
        r = i * 2 + 2,
        smallest = i;
      if (l < this.heap.length && this.heap[l][1] < this.heap[smallest][1])
        smallest = l;
      if (r < this.heap.length && this.heap[r][1] < this.heap[smallest][1])
        smallest = r;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
    return top;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [N, M] = input.shift();
const graph = Array.from({ length: N + 1 }, () => []);

for (let [a, b, c] of input) {
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

const dist = Array(N + 1).fill(Infinity);
dist[1] = 0;

const pq = new MinHeap();
pq.push([1, 0]);

while (!pq.isEmpty()) {
  const [cur, cost] = pq.pop();
  if (cost > dist[cur]) continue;
  if (cur === N) break;

  for (let [next, w] of graph[cur]) {
    const nextCost = cost + w;
    if (nextCost < dist[next]) {
      dist[next] = nextCost;
      pq.push([next, nextCost]);
    }
  }
}

console.log(dist[N]);
