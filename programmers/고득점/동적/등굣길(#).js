function solution(m, n, puddles) {
    var answer = 0;
    let dp = Array.from(Array(n), () => Array(m).fill(1));

    for (const puddle of puddles) {
        const [x, y] = puddle;
        if (x === 1) for (let i = y - 1; i < n; i++) dp[i][x - 1] = 0;
        if (y === 1) for (let i = x - 1; i < m; i++) dp[y - 1][i] = 0;
    }

    for (const puddle of puddles) {
        const [x, y] = puddle;
        dp[y - 1][x - 1] = 0;
    }

    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (x - 1 < 0 || y - 1 < 0) continue;
            if (dp[y][x] === 0) continue;
            dp[y][x] = dp[y][x - 1] + dp[y - 1][x];
            dp[y][x] = dp[y][x] % 1000000007;
        }
    }

    answer = dp[n - 1][m - 1];

    return answer;
}
