function solution(arr) {
    let answer = arr;

    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let idx = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] <= min) {
                min = arr[j];
                idx = j;
            }
        }
        if (min != arr[i]) {
            swap(i, idx);
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
    for (let i = 0; i < arr.length; i++) {
        let idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[idx]) idx = j;
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
    return answer;
}

let arr = [13, 5, 11, 7, 7, 23, 15];
console.log(solution(arr));
