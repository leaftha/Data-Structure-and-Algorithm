const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

input.sort((a, b) => a[0] - b[0]);

let max = -1;
let idx = 0;

for (let i = 0; i < input.length; i++) {
  if (max < input[i][1]) {
    max = input[i][1];
    idx = i;
  }
}

let answer = 0;

let prev1 = input[0][0];
let prevMax = input[0][1];
for (let i = 1; i <= idx; i++) {
  if (prevMax <= input[i][1]) {
    answer += prevMax * (input[i][0] - prev1);
    prevMax = input[i][1];
    prev1 = input[i][0];
  }
}

prev1 = input[input.length - 1][0];
prevMax = input[input.length - 1][1];

for (let i = input.length - 2; i >= idx; i--) {
  if (prevMax <= input[i][1]) {
    answer += prevMax * (prev1 - input[i][0]);
    prevMax = input[i][1];
    prev1 = input[i][0];
  }
}
answer += input[idx][1];
console.log(answer);
