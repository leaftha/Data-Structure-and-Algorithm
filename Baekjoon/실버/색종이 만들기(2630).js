const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n] = input.shift();

let whilte = 0;
let blue = 0;

function recur(t, b, l, r) {
  if (b === t && r === l) {
    return;
  }
  let isFalse = false;
  let color = input[t][l];
  for (let i = t; i < b; i++) {
    for (let j = l; j < r; j++) {
      if (color != input[i][j]) {
        isFalse = true;
        break;
      }
    }
    if (isFalse) break;
  }

  if (isFalse) {
    recur(t, Math.floor((t + b) / 2), l, Math.floor((l + r) / 2));
    recur(t, Math.floor((t + b) / 2), Math.floor((l + r) / 2), r);
    recur(Math.floor((t + b) / 2), b, l, Math.floor((l + r) / 2));
    recur(Math.floor((t + b) / 2), b, Math.floor((l + r) / 2), r);
  } else {
    if (color === 1) {
      blue++;
    } else {
      whilte++;
    }
  }
}

recur(0, n, 0, n);
console.log(whilte);
console.log(blue);
