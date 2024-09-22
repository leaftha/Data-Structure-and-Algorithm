const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(BigInt));
// .map((el) => el.trim());

const [a, b, c] = input.shift();

function solution(power) {
  if (power === 1n) {
    return a % c;
  }
  const half = solution(power / 2n) % c;

  if (power % 2n) {
    return (half * half * (a % c)) % c;
  }
  return (half * half) % c;
}

console.log(solution(b).toString());
