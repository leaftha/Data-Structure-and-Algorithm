function solution(arr) {
    let answer = [];
    let arr1 = [...arr[0]];
    let arr2 = [...arr[1]];
    arr1.sort((a, b) => a - b);
    for (let i = 0; i < arr2.length; i++) {
        let lt = 0;
        let rt = arr1.length - 1;
        let isTrue = false;

        while (lt <= rt) {
            let mid = Math.floor((lt + rt) / 2);

            if (arr1[mid] === arr2[i]) {
                isTrue = true;
                break;
            } else if (arr1[mid] > arr2[i]) {
                rt = mid - 1;
            } else {
                lt = mid + 1;
            }
        }

        if (isTrue) {
            answer.push(1);
        } else {
            answer.push(0);
        }
    }
    return answer;
}

let arr = [
    [6, 3, 2, 10, -10],
    [10, 9, -5, 2, 3, 4, 5, -10],
];

console.log(solution(arr));
