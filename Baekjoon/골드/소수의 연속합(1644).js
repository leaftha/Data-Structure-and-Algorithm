const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const [N] = input.shift();

const sieve = new Array(N + 1).fill(true);

sieve[0] = sieve[1] = false;

for (let i = 2; i * i <= N; i++) {
  if (sieve[i]) {
    for (let j = i * i; j <= N; j += i) {
      sieve[j] = false;
    }
  }
}

const arr = [];
for (let i = 2; i <= N; i++) {
  if (sieve[i]) arr.push(i);
}

let lt = 0;
let rt = 0;
let sum = arr[lt];
let answer = 0;
while (rt < arr.length) {
  if (sum === N) {
    answer++;
    sum -= arr[lt];
    lt++;
  } else if (sum < N) {
    rt++;
    sum += arr[rt];
  } else {
    sum -= arr[lt];
    lt++;
  }
}
console.log(answer);
