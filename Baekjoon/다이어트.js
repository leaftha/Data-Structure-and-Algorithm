function solution(arr) {
    let answer = [1000000000000];
    let lists = [];
    function recur(idx, A, B, C, D, price) {
        if (idx === arr.length - 1) {
            if (A >= arr[0][0] && B >= arr[0][1] && C >= arr[0][2] && D >= arr[0][3]) {
                if (answer[0] > price) {
                    answer[0] = Math.min(answer[0], price);
                    answer[1] = [...lists];
                }
            }
            return;
        }

        lists.push(idx + 1);
        recur(
            idx + 1,
            A + arr[idx + 1][0],
            B + arr[idx + 1][1],
            C + arr[idx + 1][2],
            D + arr[idx + 1][3],
            price + arr[idx + 1][4]
        );
        lists.pop();
        recur(idx + 1, A, B, C, D, price);
    }

    recur(0, 0, 0, 0, 0, 0);

    return answer;
}

let arr = [
    [100, 70, 90, 10],
    [30, 55, 10, 8, 100],
    [60, 10, 10, 2, 70],
    [10, 80, 50, 0, 50],
    [40, 30, 30, 8, 60],
    [60, 10, 70, 2, 120],
    [20, 70, 50, 4, 4],
];

console.log(solution(arr));
