function solution(arr) {
  let answer = 0;
  let dp = Array.from(Array(arr[0].length + 1), () =>
    Array(arr[1].length + 1).fill(0)
  );
  for (let i = 1; i < arr[1].length + 1; i++) {
    for (let j = 1; j < arr[0].length + 1; j++) {
      if (arr[1][i - 1] === arr[0][j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  answer = dp[arr[1].length][arr[0].length];

  return answer;
}

let arr = ["ACAYKP", "CAPCAK"];
console.log(solution(arr));
