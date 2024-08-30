const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();
let tree = input.shift();

function counting(arr, h) {
  let cnt = 0;
  for (let i of arr) {
    if (i > h) {
      cnt += i - h;
    }
  }
  return cnt;
}

let lt = 0;
let rt = Math.max(...tree);
let c = 0;

while (lt <= rt) {
  let mid = Math.floor((lt + rt) / 2);
  let length = counting(tree, mid);

  if (length >= m) {
    c = mid;
    lt = mid + 1;
  } else {
    rt = mid - 1;
  }
}

console.log(c);
