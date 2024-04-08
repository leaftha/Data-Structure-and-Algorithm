function solution(r1, r2) {
    var answer = 0;

    for (let i = 1; i <= r2; i++) {
        if (i < r1) {
            answer += Math.floor(Math.sqrt(r2 * r2 - i * i)) - Math.ceil(Math.sqrt(r1 * r1 - i * i)) + 1;
        } else {
            answer += Math.floor(Math.sqrt(r2 * r2 - i * i)) + 1;
        }
    }
    answer *= 4;
    return answer;
}
