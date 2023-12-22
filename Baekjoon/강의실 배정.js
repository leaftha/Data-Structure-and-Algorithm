// 수강신청의 마스터 김종혜 선생님에게 새로운 과제가 주어졌다.

// 김종혜 선생님한테는 Si에 시작해서 Ti에 끝나는 N개의 수업이 주어지는데, 최소의 강의실을 사용해서 모든 수업을 가능하게 해야 한다.

// 참고로, 수업이 끝난 직후에 다음 수업을 시작할 수 있다. (즉, Ti ≤ Sj 일 경우 i 수업과 j 수업은 같이 들을 수 있다.)

// 수강신청 대충한 게 찔리면, 선생님을 도와드리자!

// 입력
// 첫 번째 줄에 N이 주어진다. (1 ≤ N ≤ 200,000)

// 이후 N개의 줄에 Si, Ti가 주어진다. (0 ≤ Si < Ti ≤ 109)

// 출력
// 강의실의 개수를 출력하라.

function solution(arr) {
    let answer = 1;

    arr.sort((a, b) => {
        return a[1] - b[1];
    });

    let last = arr[0][1];
    for (let i = 1; i < arr.length; i++) {
        if (last > arr[i][0]) {
            answer++;
        } else {
            last = arr[i][1];
        }
    }

    return answer;
}

let arr = [
    [1, 3],
    [2, 4],
    [3, 5],
];

console.log(solution(arr));
