// 문제 설명
// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
// 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이
// 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
// i! ≤ n

function solution(n) {
    if (n === 1) return 1;
    var answer = 0;
    let count = 0;
    let num = 1;
    while (1) {
        if (n === num) {
            answer = count;
            break;
        } else if (n < num) {
            answer = count - 1;
            break;
        }
        count++;
        num *= count;
    }
    return answer;
}
