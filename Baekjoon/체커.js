function solution(arr) {
    let answer = Array(arr.length).fill(10000000);

    for (let i = 0; i < arr.length; i++) {
        let x = arr[i][0];
        let y = arr[i][1];
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            let nx = arr[j][0];
            let ny = arr[j][1];
            sum += Math.abs(nx - x) + Math.abs(ny - y);
            // answer.push(sum)
            answer[j] = Math.min(answer[j], sum);
        }
        console.log('DASFASDF');
    }

    return answer;
}

let arr = [
    [1, 1],
    [2, 1],
    [4, 1],
    [9, 1],
];

console.log(solution(arr));
