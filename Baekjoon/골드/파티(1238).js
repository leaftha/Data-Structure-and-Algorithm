const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
// .map((el) => el.trim());

class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  left(index) {
    return 2 * index + 1;
  }

  right(index) {
    return 2 * index + 2;
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp(index) {
    let currentIndex = index;
    while (
      currentIndex > 0 &&
      this.heap[this.parent(currentIndex)][0] > this.heap[currentIndex][0]
    ) {
      this.swap(currentIndex, this.parent(currentIndex));
      currentIndex = this.parent(currentIndex);
    }
  }

  heapifyDown(index) {
    let smallest = index;
    const left = this.left(index);
    const right = this.right(index);

    if (
      left < this.heap.length &&
      this.heap[left][0] < this.heap[smallest][0]
    ) {
      smallest = left;
    }

    if (
      right < this.heap.length &&
      this.heap[right][0] < this.heap[smallest][0]
    ) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

let [n, m, x] = input.shift();

let graph = Array.from({ length: n + 1 }, () => []);
let reverseGraph = Array.from({ length: n + 1 }, () => []);

for (let [p, q, c] of input) {
  graph[p].push([q, c]);
  reverseGraph[q].push([p, c]);
}

function dij(s, g) {
  const dist = Array(n + 1).fill(Infinity);
  let h = new MinHeap();
  h.push([s, 0]);
  dist[s] = 0;

  while (!h.isEmpty()) {
    let [n, c] = h.pop();
    if (c > dist[n]) continue;
    for (let [cn, cc] of g[n]) {
      const newCost = c + cc;
      if (newCost < dist[cn]) {
        dist[cn] = newCost;
        h.push([cn, newCost]);
      }
    }
  }
  return dist;
}

const a1 = dij(x, graph);

const a2 = dij(x, reverseGraph);

let max = -1;

for (let i = 1; i <= n; i++) {
  const roundTripTime = a1[i] + a2[i];
  if (roundTripTime > max) {
    max = roundTripTime;
  }
}
console.log(max);
