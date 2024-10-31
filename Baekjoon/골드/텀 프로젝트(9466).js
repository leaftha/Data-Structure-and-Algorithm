const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let [t] = input.shift();
let idx = 0;
let result = [];

for (let _ = 0; _ < t; _++) {
  const [n] = input[idx];
  const members = [0, ...input[idx + 1]];
  idx += 2;

  const visited = Array(n + 1).fill(false);
  const inCycle = Array(n + 1).fill(false);
  let nonTeamCount = 0;

  function dfs(student) {
    let stack = [];
    while (!visited[student]) {
      visited[student] = true;
      stack.push(student);
      student = members[student];
    }

    if (stack.includes(student)) {
      const cycleStartIndex = stack.indexOf(student);
      for (let i = cycleStartIndex; i < stack.length; i++) {
        inCycle[stack[i]] = true;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) dfs(i);
  }

  for (let i = 1; i <= n; i++) {
    if (!inCycle[i]) nonTeamCount++;
  }

  result.push(nonTeamCount);
}

console.log(result.join("\n"));
