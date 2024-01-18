function solution(n) {
    let answer = 0;
    let dp = Array(n).fill(0);
    dp[0] = 1;
    dp[1] = 2;

    for (let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }

    answer = dp[n - 1];
    return answer;
}

console.log(solution(9));
