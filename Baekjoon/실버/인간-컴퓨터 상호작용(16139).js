const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(String));
// .map((el) => el.trim().split(" ").map());

const [str] = input[0];
const N = Number(input[1]);

const arr = Array.from({ length: 26 }, () => Array(str.length + 1).fill(0));

for (let i = 0; i < str.length; i++) {
  const char = str.charCodeAt(i) - 97;

  for (let j = 0; j < 26; j++) {
    arr[j][i + 1] = arr[j][i] + (j === char ? 1 : 0);
  }
}

let result = [];
for (let i = 0; i < N; i++) {
  const [alpha, l, r] = input[i + 2];
  const charIndex = alpha.charCodeAt(0) - 97;
  result.push(arr[charIndex][Number(r) + 1] - arr[charIndex][Number(l)]);
}

console.log(result.join("\n"));
