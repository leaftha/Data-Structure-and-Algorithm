const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => String(el));

let str = input.shift().trim();
let total = input.shift().trim();

let answer = 0;

const dfs = (cur) => {
  if (cur.length === str.length) {
    if (cur === str) answer = 1;
    return;
  }

  if (cur[cur.length - 1] === "A") {
    dfs(cur.slice(0, -1));
  }

  if (cur[0] === "B") {
    let reversed = cur.slice(1).split("").reverse().join("");
    dfs(reversed);
  }
};

dfs(total);
console.log(answer);
