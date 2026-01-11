const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(String));

function isWin(b, c) {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return win.some((line) => line.every((i) => b[i] === c));
}

const answer = [];
for (let [bord] of input) {
  if (bord === "end") break;
  let x = 0;
  let o = 0;
  for (let n of bord) {
    if (n === "X") {
      x++;
    } else if (n === "O") {
      o++;
    }
  }
  const xWin = isWin(bord, "X");
  const oWin = isWin(bord, "O");

  if (x < o || x > o + 1) answer.push("invalid");
  else if (xWin && oWin) answer.push("invalid");
  else if (xWin && x !== o + 1) answer.push("invalid");
  else if (oWin && x !== o) answer.push("invalid");
  else if (!xWin && !oWin && x + o !== 9) answer.push("invalid");
  else answer.push("valid");
}

console.log(answer.join("\n"));
