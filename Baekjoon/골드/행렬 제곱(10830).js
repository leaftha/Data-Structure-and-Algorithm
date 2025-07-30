const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" ").map(Number));

const [n, b] = input.shift();
const mod = 1000;
const matrix = input;

function multiplyMatrix(a, b) {
  const result = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      for (let j = 0; j < n; j++) {
        result[i][j] = (result[i][j] + a[i][k] * b[k][j]) % mod;
      }
    }
  }
  return result;
}

function matrixPow(matrix, exp) {
  if (exp === 1) {
    return matrix.map((row) => row.map((val) => val % mod));
  }

  const half = matrixPow(matrix, Math.floor(exp / 2));
  const halfSquared = multiplyMatrix(half, half);

  return exp % 2 === 0 ? halfSquared : multiplyMatrix(halfSquared, matrix);
}

const result = matrixPow(matrix, b);

console.log(result.map((row) => row.join(" ")).join("\n"));
