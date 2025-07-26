const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();

let q = [n];

let path = Array(100001).fill(0);
let time = Array(100001).fill(-1);
path[n] = 1;
time[n] = 0;

while (q.length) {
  let cur = q.shift();

  let arr = [cur - 1, cur + 1, cur * 2];

  for (let next of arr) {
    if (next < 0 || next >= 100001) continue;

    if (time[next] === -1) {
      time[next] = time[cur] + 1;
      path[next] = path[cur];
      q.push(next);
    } else if (time[next] === time[cur] + 1) {
      path[next] += path[cur];
    }
  }
}

console.log(time[m]);
console.log(path[m]);
