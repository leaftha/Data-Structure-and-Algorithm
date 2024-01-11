function solution(arr) {
    let answer = [];

    for (let i = -999; i <= 999; i++) {
        for (let j = -999; j <= 999; j++) {
            let sum1 = i * arr[0] + j * arr[1];
            let sum2 = i * arr[3] + j * arr[4];

            if (sum1 === arr[2] && sum2 === arr[5]) {
                answer.push([i, j]);
            }
        }
    }

    return answer;
}

let arr = [1, 3, -1, 4, 1, 7];

console.log(solution(arr));
