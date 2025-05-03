const { count } = require("console");
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const [N, M] = input.shift();

const check1 = Array(M + 1).fill(0);
const check2 = Array(M + 1).fill(0);

for (let i = 0; i < N; i++) {
  let h = input[i][0];

  if (i % 2 === 0) {
    check1[h]++;
  } else {
    check2[M - h + 1]++;
  }
}

for (let i = M - 1; i > 0; i--) {
  check1[i] += check1[i + 1];
}
for (let i = 1; i <= M; i++) {
  check2[i] += check2[i - 1];
}

let min = Infinity;

let answer = 0;

for (let i = 1; i <= M; i++) {
  let total = check1[i] + check2[i];
  if (total < min) {
    min = total;
    answer = 1;
  } else if (total === min) {
    answer++;
  }
}

console.log(min, answer);
