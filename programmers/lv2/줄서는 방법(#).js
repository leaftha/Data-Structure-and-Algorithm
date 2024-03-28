function solution(n, k) {
    const firstLine = Array.from({ length: n }, (_, idx) => idx + 1);
    const answer = [];
    for (let i = 1; i <= n; i++) {
        let divider = 1;

        for (let j = 1; j <= n - i; j++) {
            divider *= j;
        }
        const idx = Math.ceil(k / divider) - 1;
        const popValue = firstLine.splice(idx, 1)[0];
        answer.push(popValue);
        k -= divider * idx;
    }
    return answer;
}
