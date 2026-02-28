const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const [N, M, R] = input.shift();
const layers = Math.min(N, M) / 2;

const map = Array.from({ length: N }, () => Array(M).fill(0));

for (let layer = 0; layer < layers; layer++) {
  const top = layer;
  const left = layer;
  const bottom = N - 1 - layer;
  const right = M - 1 - layer;
  const arr = [];

  for (let i = left; i <= right; i++) arr.push(input[top][i]);

  for (let i = top + 1; i <= bottom - 1; i++) arr.push(input[i][right]);

  for (let i = right; i >= left; i--) arr.push(input[bottom][i]);

  for (let i = bottom - 1; i >= top + 1; i--) arr.push(input[i][left]);

  const len = arr.length;
  const rotate = R % len;

  const rotated = [...arr.slice(rotate), ...arr.slice(0, rotate)];

  for (let i = left; i <= right; i++) {
    map[top][i] = rotated.shift();
  }

  for (let i = top + 1; i <= bottom - 1; i++) map[i][right] = rotated.shift();
  for (let i = right; i >= left; i--) map[bottom][i] = rotated.shift();

  for (let i = bottom - 1; i >= top + 1; i--) map[i][left] = rotated.shift();
}
console.log(map.map((row) => row.join(" ")).join("\n"));
