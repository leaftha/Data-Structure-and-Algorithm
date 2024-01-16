function solution(arr) {
    let answer = 0;

    function recur(idx, price) {
        if (idx === arr.length - 1) {
            answer = Math.max(price, answer);
        }
        if (idx > arr.length - 1) return;

        recur(idx + arr[idx][0], price + arr[idx][1]);
        recur(idx + 1, price);
    }

    recur(0, 0);

    return answer;
}

let arr = [
    [3, 10],
    [5, 20],
    [1, 10],
    [1, 20],
    [2, 15],
    [4, 40],
    [2, 200],
];

console.log(solution(arr));
