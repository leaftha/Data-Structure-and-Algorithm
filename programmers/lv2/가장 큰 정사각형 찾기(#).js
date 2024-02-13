function solution(board) {
    var answer = 0;
    let dp = Array.from(Array(board.length + 1), () => Array(board[0].length + 1).fill(0));

    for (let i = 1; i < board.length + 1; i++) {
        for (let j = 1; j < board[0].length + 1; j++) {
            if (board[i - 1][j - 1] === 0) continue;
            if (board[i - 1][j - 1] === 1) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                answer = Math.max(answer, dp[i][j] ** 2);
            }
        }
    }
    return answer;
}
