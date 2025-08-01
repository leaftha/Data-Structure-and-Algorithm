const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, d, k, c] = input.shift().split(" ").map(Number);
const dish = input.map(Number);

for (let i = 0; i < k - 1; i++) {
  dish.push(dish[i]);
}

let countMap = new Map();
let max = 0;

for (let i = 0; i < k; i++) {
  countMap.set(dish[i], (countMap.get(dish[i]) || 0) + 1);
}
max = countMap.has(c) ? countMap.size : countMap.size + 1;

for (let i = 1; i < n; i++) {
  const remove = dish[i - 1];
  const add = dish[i + k - 1];

  countMap.set(remove, countMap.get(remove) - 1);
  if (countMap.get(remove) === 0) countMap.delete(remove);

  countMap.set(add, (countMap.get(add) || 0) + 1);

  const total = countMap.has(c) ? countMap.size : countMap.size + 1;
  max = Math.max(max, total);
}

console.log(max);
