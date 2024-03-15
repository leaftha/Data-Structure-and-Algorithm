function solution(n) {
    let answer = 0;
    let dy = Array(n).fill(0);

    dy[0] = 1;
    dy[1] = 2;

    for (let i = 2; i < dy.length; i++) {
        dy[i] = dy[i - 2] + dy[i - 1];
    }

    answer = dy[n - 1];
    return answer;
}

console.log(solution(7));

function solution(n) {
    var answer = 0;
    let dp = Array(n).fill(0);
    dp[0] = 1;
    dp[1] = 2;

    for (let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    answer = dp.at(-1);

    return answer;
}

console.log(solution(7));
