// 문제 설명
// 문자열 my_string이 매개변수로 주어질 때,
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        let code = my_string.charCodeAt([i]);
        if (code < 91 && code > 64) {
            answer += my_string[i].toLowerCase();
        } else {
            answer += my_string[i].toUpperCase();
        }
    }
    return answer;
}
solution('cccCCC');
