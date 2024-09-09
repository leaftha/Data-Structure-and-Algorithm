const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [n, m] = input.shift();

let obj = {};

for (let [s, e] of input) {
  if (obj[s]) {
    obj[s].push(e);
  } else {
    obj[s] = [e];
  }

  if (obj[e]) {
    obj[e].push(s);
  } else {
    obj[e] = [s];
  }
}

let arr = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  let q = [[i, 0]];
  let visted = Array(n + 1).fill(0);
  let counter = Array(n + 1).fill(Infinity);
  visted[i] = 1;
  while (q.length) {
    let [c, count] = q.shift();
    count++;
    for (let num of obj[c]) {
      if (visted[num] === 0) {
        q.push([num, count]);
        visted[num] = 1;
        counter[num] = Math.min(counter[num], count);
      }
    }
  }
  let sum = 0;
  for (let j of counter) {
    if (j != Infinity) {
      sum += j;
    }
  }
  arr[i] = sum;
}

arr.shift();
let min = Math.min(...arr);
console.log(arr.indexOf(min) + 1);
