// 문제 설명
// 문자열 my_str과 n이 매개변수로 주어질 때,
// my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
    var answer = [];
    let count = 0;
    let itme = '';
    for (let i = 0; i < my_str.length; i++) {
        itme += my_str[i];
        count++;
        if (count === n) {
            answer.push(itme);
            count = 0;
            itme = '';
        } else if (i === my_str.length - 1) {
            answer.push(itme);
        }
    }
    return answer;
}
