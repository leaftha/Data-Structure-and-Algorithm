// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

function solution(n) {
    let answer = 0;
    const arr = new Array(n + 1).fill(true);

    for (let i = 2; i <= n; ++i) {
        if (arr[i] === false) {
            continue;
        }
        for (let k = i * 2; k <= n; k += i) {
            arr[k] = false;
        }
    }
    for (let i = 2; i <= n; ++i) {
        if (arr[i] === true) {
            answer++;
        }
    }
    return answer;
}
