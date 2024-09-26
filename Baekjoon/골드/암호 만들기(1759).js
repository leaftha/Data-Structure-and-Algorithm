const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map((el) => el.trim().split(" ").map(Number));
  .map((el) => el.trim().split(" "));

let [n, m] = input.shift();
let char = input.shift();

char.sort();

function check(s) {
  let a = 0;
  let b = 0;
  for (let i of s) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      a++;
    } else {
      b++;
    }
  }

  if (a >= 1 && b >= 2) {
    return true;
  } else {
    return false;
  }
}

function dfs(L, str) {
  if (str.length === Number(n)) {
    if (check(str)) {
      console.log(str);
    }
    return;
  }

  for (let i = L; i < char.length; i++) {
    dfs(i + 1, str + char[i]);
  }
}

dfs(0, "");
