function solution(n) {
  let answer = 0;

  let dp = Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  answer = dp.at(-1);
  return answer;
}

console.log(solution(10));
