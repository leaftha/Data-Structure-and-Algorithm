function solution(meeting) {
    let answer = 0;
    meeting.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });

    let last = 0;
    for (let i = 0; i < meeting.length; i++) {
        if (last <= meeting[i][0]) {
            last = meeting[i][1];
            answer++;
        }
    }
    return answer;
}

// 풀이

function solution(meeting) {
    let answer = 0;
    meeting.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });
    let et = 0;
    for (let x of meeting) {
        if (x[0] >= et) {
            answer++;
            et = x[1];
        }
    }
    return answer;
}

let arr = [
    [3, 3],
    [1, 3],
    [2, 3],
];
console.log(solution(arr));
