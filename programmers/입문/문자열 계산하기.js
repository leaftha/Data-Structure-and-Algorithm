// 문제 설명
// my_string은 "3 + 5"처럼 문자열로 된 수식입니다.
// 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

function solution(my_string) {
    var answer = 0;
    let arr = my_string.split(' ');
    answer += arr[0] * 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '+' || arr[i] === '-') {
            continue;
        }
        if (arr[i + 1] === '+') {
            answer += arr[i + 2] * 1;
        } else if (arr[i + 1] === '-') {
            answer -= arr[i + 2] * 1;
        }
    }
    return answer;
}
