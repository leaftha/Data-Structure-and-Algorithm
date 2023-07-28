// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다.
// my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
// my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    var answer = 0;
    let nums = [];
    let n = '';
    for (let i = 0; i < my_string.length; i++) {
        if (!isNaN(my_string[i])) {
            n += my_string[i];
            if (!isNaN(my_string[i + 1])) {
                continue;
            } else {
                nums.push(n);
                n = '';
            }
        }
    }
    nums.map((n) => {
        return (answer += n * 1);
    });
    return answer;
}
