const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

let [n] = input.shift();
let answer = 0;

const base = Array(26).fill(0);

for (let s of input[0]) {
  base[s.charCodeAt(0) - 65]++;
}

const check = (word) => {
  if (Math.abs(word.length - input[0].length) > 1) return false;

  const cnt = Array(26).fill(0);
  for (const ch of word) {
    cnt[ch.charCodeAt(0) - 65]++;
  }

  let diff = 0;

  for (let i = 0; i < 26; i++) {
    const d = Math.abs(base[i] - cnt[i]);
    if (d >= 2) return false;
    diff += d;
  }

  return diff <= 2;
};

for (let i = 1; i < input.length; i++) {
  if (check(input[i])) answer++;
}

console.log(answer);
