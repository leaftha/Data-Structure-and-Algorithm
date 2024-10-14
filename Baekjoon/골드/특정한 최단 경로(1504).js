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

  parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  leftChid(idx) {
    return idx * 2 + 1;
  }
  rightChid(idx) {
    return idx * 2 + 2;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return root;
  }

  bubbleUp(idx) {
    let current = idx;

    while (
      current > 0 &&
      this.heap[this.parent(current)][1] > this.heap[current][1]
    ) {
      this.swap(this.parent(current), current);
      current = this.parent(current);
    }
  }

  bubbleDown(idx) {
    let small = idx;
    let left = this.leftChid(small);
    let right = this.rightChid(small);

    if (left < this.heap.length && this.heap[left][1] < this.heap[small][1]) {
      small = left;
    }

    if (right < this.heap.length && this.heap[right][1] < this.heap[small][1]) {
      small = right;
    }

    if (small !== idx) {
      this.swap(small, idx);
      this.bubbleDown(small);
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

let [n, m] = input.shift();
let [a, b] = input.pop();

let g = Array.from({ length: n + 1 }, () => []);

for (let [p, n, c] of input) {
  g[p].push([n, c]);
  g[n].push([p, c]);
}

function dij(s) {
  const dist = Array(n + 1).fill(Infinity);
  let h = new MinHeap();
  h.push([s, 0]);
  dist[s] = 0;

  while (!h.isEmpty()) {
    let [n, c] = h.pop();
    if (c > dist[n]) continue;
    for (let [cn, cc] of g[n]) {
      const newCost = cc + c;
      if (newCost < dist[cn]) {
        dist[cn] = newCost;
        h.push([cn, newCost]);
      }
    }
  }
  return dist;
}

const dist = dij(1);
const distA = dij(a);
const distB = dij(b);

const one = dist[a] + distA[b] + distB[n];
const two = dist[b] + distB[a] + distA[n];

console.log(one !== Infinity && two !== Infinity ? Math.min(one, two) : -1);
