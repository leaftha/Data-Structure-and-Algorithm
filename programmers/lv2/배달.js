function solution(N, road, K) {
  var answer = 0;
  const arr = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  const lines = Array.from(Array(N + 1), () => []);

  road.forEach((value) => {
    let [a, b, c] = value;
    lines[a].push({ to: b, cost: c });
    lines[b].push({ to: a, cost: c });
  });

  let queue = [{ to: 1, cost: 0 }];
  arr[1] = 0;

  while (queue.length) {
    let { to } = queue.pop();

    lines[to].forEach((next) => {
      if (arr[next.to] > arr[to] + next.cost) {
        arr[next.to] = arr[to] + next.cost;
        queue.push(next);
      }
    });
  }
  for (let i = 1; i <= N; i++) {
    if (arr[i] <= K) {
      answer++;
    }
  }
  return answer;
}

// -------------------------------------------------------------------

class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  insert(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }
    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return min;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let idx = this.size() - 1;
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.items[parent] <= this.items[idx]) {
        break;
      }
      this.swap(idx, parent);
      idx = parent;
    }
  }

  bubbleDown() {
    let idx = 0;
    while (idx * 2 + 1 < this.size()) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;

      let smaller =
        right < this.size() && this.items[right] < this.items[left]
          ? right
          : left;

      if (this.items[idx] < this.items[smaller]) {
        break;
      }

      this.swap(idx, smaller);
      idx = smaller;
    }
  }
}

function solution(N, road, K) {
  var answer = 0;

  const graph = Array.from({ length: N + 1 }, () => []);

  const distances = Array(N + 1).fill(Infinity);
  distances[1] = 0;

  for (const [a, b, cost] of road) {
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
  }

  const heap = new MinHeap();
  heap.insert([0, 1]);
  while (heap.size() > 0) {
    const [dist, node] = heap.pop();

    for (const [nextNode, nextDist] of graph[node]) {
      const cost = dist + nextDist;
      if (cost < distances[nextNode]) {
        distances[nextNode] = cost;
        heap.insert([cost, nextNode]);
      }
    }
  }
  return distances.filter((dist) => dist <= K).length;
}
