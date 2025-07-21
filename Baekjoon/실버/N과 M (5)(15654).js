const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();

const combi = (arr, select) => {
  let result = [];
  if (select === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinaitions = combi(rest, select - 1);
    const add = combinaitions.map((el) => [fixed, ...el]);

    result.push(...add);
  });

  return result;
};

let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(i);
}

const answer = combi(arr, m);

for (let arr of answer) {
  console.log(arr.join(" "));
}

const result = [];
const path = [];

function backtrack(start) {
  if (path.length === m) {
    result.push(path.join(" "));
    return;
  }

  for (let i = start; i <= n; i++) {
    path.push(i);
    backtrack(i + 1);
    path.pop();
  }
}

backtrack(1);
console.log(result.join("\n"));
