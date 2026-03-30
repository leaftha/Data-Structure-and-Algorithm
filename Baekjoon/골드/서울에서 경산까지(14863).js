const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

let [N, K] = input.shift();

let dp = Array(K + 1).fill(-1);
dp[0] = 0;
for (let i = 0; i < N; i++) {
  const [walkTime, walkMoney, bikeTime, bikeMoney] = input[i];
  let nextDp = Array(K + 1).fill(-1);

  for (let j = 0; j <= K; j++) {
    if (dp[j] === -1) continue;

    // 도보 이동
    if (j + walkTime <= K) {
      nextDp[j + walkTime] = Math.max(nextDp[j + walkTime], dp[j] + walkMoney);
    }
    // 자전거 이동
    if (j + bikeTime <= K) {
      nextDp[j + bikeTime] = Math.max(nextDp[j + bikeTime], dp[j] + bikeMoney);
    }
  }
  dp = nextDp;
}

console.log(Math.max(...dp));
