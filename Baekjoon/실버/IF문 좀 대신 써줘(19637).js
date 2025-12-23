const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(String));

let [n, m] = input.shift();
let arr = input.splice(0, n);
let out = [];
for (let [num] of input) {
  let answer = "";
  let lt = 0;
  let rt = n - 1;
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    if (Number(num) <= Number(arr[mid][1])) {
      rt = mid - 1;
      answer = mid;
    } else {
      lt = mid + 1;
    }
  }
  out.push(arr[answer][0]);
}

console.log(out.join("\n"));
