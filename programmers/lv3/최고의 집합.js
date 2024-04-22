function solution(n, s) {
    const answer = [];

    if (n > s) return [-1];

    for (i = n; i > 0; i--) {
        const avg = Math.floor(s / i);
        answer.push(avg);
        s -= avg;
    }
    return answer;
}
