const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [N, K] = input[0];

let queue = [N];
let time = Array(100001).fill(-1);
let path = Array(100001).fill(-1);

time[N] = 0;

while (queue.length > 0) {
  let current = queue.shift();

  let nextPositions = [current - 1, current + 1, current * 2];

  for (let next of nextPositions) {
    if (next >= 0 && next <= 100000 && time[next] === -1) {
      time[next] = time[current] + 1;
      path[next] = current;
      queue.push(next);
    }
  }

  if (time[K] !== -1) {
    break;
  }
}

console.log(time[K]);

let resultPath = [];
let current = K;
while (current !== N) {
  resultPath.push(current);
  current = path[current];
}
resultPath.push(N);

console.log(resultPath.reverse().join(" "));
