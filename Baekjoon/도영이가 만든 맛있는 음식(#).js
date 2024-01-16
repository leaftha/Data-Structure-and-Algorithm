function solution(arr) {
    let answer = 100000000000;
    function recur(idx, A, B, use) {
        if (idx === arr.length) {
            if (use === 0) {
                return;
            }
            console.log(A, B);
            answer = Math.min(Math.abs(A - B), answer);
            return;
        }

        recur(idx + 1, A * arr[idx][0], B + arr[idx][1], use + 1);
        recur(idx + 1, A, B, use);
    }

    recur(0, 1, 0, 0);

    return answer;
}

let arr = [
    [1, 7],
    [2, 6],
    [3, 8],
    [4, 9],
];

console.log(solution(arr));
