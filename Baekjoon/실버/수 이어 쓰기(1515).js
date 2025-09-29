const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

if (input.length === 0) {
  console.log(0);
  process.exit(0);
}

const s = input;
let pos = 0;

for (let i = 1; ; i++) {
  const num = String(i);
  for (let k = 0; k < num.length && pos < s.length; k++) {
    if (num[k] === s[pos]) pos++;
  }
  if (pos === s.length) {
    console.log(i);
    break;
  }
}
