function solution(n, arr) {
    let answer = 0;
    arr.sort((a, b) => a - b);

    let lt = 1;
    let rt = Math.max(...arr);

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);

        let wood = 0;

        for (let j of arr) {
            if (j >= mid) {
                wood += j - mid;
            }
        }

        if (wood >= n) {
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    answer = rt;
    return answer;
}

let arr = [20, 15, 10, 17];

console.log(solution(7, arr));
