function solution(arr) {
  let answer = 0;
  let dp = Array.from(Array(arr.length), () => Array(arr[0].length).fill(0));
  dp[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (j === 0) {
        dp[i][j] =
          Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]) + arr[i][j];
      }
      if (j === 1) {
        dp[i][j] =
          Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]) + arr[i][j];
      }
      if (j === 2) {
        dp[i][j] =
          Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]) + arr[i][j];
      }
      if (j === 3) {
        dp[i][j] =
          Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + arr[i][j];
      }
    }
  }
  answer = Math.max(...dp[arr.length - 1]);
  return answer;
}
