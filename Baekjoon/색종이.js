function solution(n, arr) {
    var answer = 0;
    let paper = Array.from(Array(100), () => Array(100).fill(0));

    for (let [x, y] of arr) {
        for (let i = x; i < x + 10; i++) {
            for (let j = y; j < y + 10; j++) {
                paper[i][j] = 1;
            }
        }
    }
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            if (paper[i][j] === 1) {
                answer++;
            }
        }
    }

    return answer;
}

let arr = [
    [3, 7],
    [15, 7],
    [5, 2],
];

console.log(solution(3, arr));
