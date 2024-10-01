const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
});

rl.on("close", () => {
  let [n, m] = input.shift();

  function find(parent, x) {
    if (parent[x] !== x) {
      parent[x] = find(parent, parent[x]);
    }
    return parent[x];
  }

  function union(parent, rank, a, b) {
    let roota = find(parent, a);
    let rootb = find(parent, b);

    if (roota !== rootb) {
      if (rank[roota] > rank[rootb]) {
        parent[rootb] = roota;
      } else if (rank[roota] < rank[rootb]) {
        parent[roota] = rootb;
      } else {
        parent[roota] = rootb;
        rank[rootb] += 1;
      }
    }
  }

  const parent = Array.from({ length: n + 1 }, (_, idx) => idx);
  const rank = new Array(n + 1).fill(0);

  const output = [];

  for (let i = 0; i < m; i++) {
    let [operation, a, b] = input[i];
    if (operation === 0) {
      union(parent, rank, a, b);
    } else if (operation === 1) {
      let rootA = find(parent, a);
      let rootB = find(parent, b);
      if (rootA === rootB) {
        output.push("YES");
      } else {
        output.push("NO");
      }
    }
  }

  console.log(output.join("\n"));
});
