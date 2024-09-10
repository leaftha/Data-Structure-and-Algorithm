const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();

let answer;

let q = [[n, 0]];
let visted = Array(100001).fill(0);
visted[n] = 1;
while (q.length) {
  let [x, c] = q.shift();
  if (x === m) {
    answer = c;
    break;
  }

  if (x - 1 >= 0 && x - 1 <= 100000 && visted[x - 1] === 0) {
    q.push([x - 1, c + 1]);
    visted[x - 1] = 1;
  }
  if (x + 1 >= 0 && x + 1 <= 100000 && visted[x + 1] === 0) {
    q.push([x + 1, c + 1]);
    visted[x + 1] = 1;
  }
  if (x * 2 >= 0 && x * 2 <= 100000 && visted[x * 2] === 0) {
    q.push([x * 2, c + 1]);
    visted[x * 2] = 1;
  }
}

console.log(answer);
