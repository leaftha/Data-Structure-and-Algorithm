const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [T, ...cases] = input;

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const lcm = (a, b) => (a * b) / gcd(a, b);

for (let [M, N, x, y] of cases) {
  let lastYear = lcm(M, N);
  let found = false;

  for (let year = x; year <= lastYear; year += M) {
    if (((year - 1) % N) + 1 === y) {
      console.log(year);
      found = true;
      break;
    }
  }

  if (!found) console.log(-1);
}
