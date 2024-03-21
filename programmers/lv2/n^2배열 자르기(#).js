function solution(n, left, right) {
    var answer = [];

    for (let i = left; i <= right; i++) {
        if (parseInt(i / n) >= i % n) {
            answer.push(parseInt(i / n) + 1);
        } else {
            answer.push((i % n) + 1);
        }
    }

    return answer;
}
// 정답

function solution(n, left, right) {
    const answer = [];
    for (let i = left; i <= right; i++) {
        const divide = Math.floor(i / n);
        const rest = i % n;
        if (divide >= rest) {
            answer.push(divide + 1);
        } else {
            answer.push(rest + 1);
        }
    }
    return answer;
}
