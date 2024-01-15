function solution(n, m) {
    let answer = 0;
    let arr = [];
    function recur(number) {
        if (number === m) {
            console.log(arr);
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (arr.indexOf(i) != -1) continue;
            arr.push(i);
            recur(number + 1);
            arr.pop();
        }
    }

    recur(0);

    return answer;
}

console.log(solution(4, 3));
