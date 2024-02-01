function solution(sequence, k) {
    var answer = [];
    let dp = Array(sequence.length + 1).fill(0);
    let left = 0;
    let right = 0;
    dp[0] = sequence[0];
    let min = 1000000;

    for (let i = 1; i < sequence.length + 1; i++) {
        if (dp[i - 1] === k) {
            if (right - left < min) {
                answer = [left, right];
                min = right - left;
            }
        }
        right += 1;
        if (dp[i - 1] + sequence[i] > k) {
            let n = dp[i - 1];
            for (let j = left; j <= i; j++) {
                left += 1;
                n -= sequence[j];
                if (n + sequence[i] <= k) {
                    dp[i] = n + sequence[i];
                    break;
                }
            }
        } else {
            dp[i] = dp[i - 1] + sequence[i];
        }
    }
    return answer;
}
