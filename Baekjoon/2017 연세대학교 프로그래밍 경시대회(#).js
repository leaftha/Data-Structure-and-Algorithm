function solution(n) {
    let answer = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (i + j + k === n && i >= j + 2 && k % 2 === 0 && i != 0 && j != 0 && k != 0) {
                    answer++;
                }
            }
        }
    }

    return answer;
}

console.log(solution(6));
