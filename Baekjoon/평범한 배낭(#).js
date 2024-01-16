function solution(n, arr) {
    let answer = 0;

    function recur(idx, w, f) {
        if (w > n) {
            return;
        }

        if (idx === arr.length) {
            answer = Math.max(answer, f);
            return;
        }

        recur(idx + 1, w + arr[idx][0], f + arr[idx][1]);

        recur(idx + 1, w, f);
    }

    recur(0, 0, 0);

    return answer;
}

let arr = [
    [6, 13],
    [4, 8],
    [3, 6],
    [5, 12],
];

console.log(solution(7, arr));
