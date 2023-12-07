function solution(arr) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            answer.push(arr[i]);
        }
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1);
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            answer.push(arr[i]);
        }
    }

    return answer;
}

function swap(a, b) {
    let idx = arr[a];
    arr[a] = arr[b];
    arr[b] = idx;
}

// 풀이

function solution(arr) {
    let answer = arr;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > 0 && arr[j + 1] < 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return answer;
}

// 풀이 2

function solution(arr) {
    let answer = [];
    for (let x of arr) {
        if (x < 0) answer.push(x);
    }
    for (let x of arr) {
        if (x > 0) answer.push(x);
    }
    return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
