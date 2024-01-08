function solution(arr) {
    let answer = 0;
    let dy = Array(arr.length).fill(0);
    dy[0] = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            dy[i] = dy[i - 1] + 1;
        } else {
            dy[i] = dy[i - 1];
        }
    }
    answer = dy.at(-1);
    return answer;
}

let arr = [10, 20, 10, 30, 20, 50];
console.log(solution(arr));
