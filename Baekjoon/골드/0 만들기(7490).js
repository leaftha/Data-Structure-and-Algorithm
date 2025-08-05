const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));
let [n] = input.shift();

let nums = [];
let answer = [];
for (let n of input) {
  nums.push(...n);
}
const exp = (path) => {
  let arr = [];
  let num = "";
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "+" || path[i] === "-") {
      arr.push(Number(num));
      arr.push(path[i]);
      num = "";
    } else if (path[i] !== " ") {
      num += path[i];
    }
  }
  arr.push(Number(num));
  let result = arr[0];
  for (let i = 1; i < arr.length; i += 2) {
    let op = arr[i];
    let val = arr[i + 1];
    result = op === "+" ? result + val : result - val;
  }
  return result;
};
const dfs = (n, path, cur) => {
  if (cur === n) {
    if (exp(path) === 0) {
      answer.push(path);
    }
    return path;
  }

  dfs(n, path + " " + (cur + 1), cur + 1);
  dfs(n, path + "+" + (cur + 1), cur + 1);
  dfs(n, path + "-" + (cur + 1), cur + 1);
};

for (let i = 0; i < n; i++) {
  dfs(nums[i], "1", 1);
  console.log(answer.join("\n"));
  if (i !== n) console.log("");
  answer = [];
}
