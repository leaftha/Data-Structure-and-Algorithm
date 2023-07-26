// 문제 설명
// 문자열 str1, str2가 매개변수로 주어집니다.
// str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(str1, str2) {
    var answer = 0;
    if (str1.includes(str2)) {
        answer = 1;
    } else {
        answer = 2;
    }
    return answer;
}

// 실패작

function solution(str1, str2) {
    if (str1.length < str2.length) return 2;
    if (str1.length === str2.length) {
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] === str2[i]) {
                console.log(str1[i]);
                return 1;
            } else {
                return 2;
            }
        }
    }
    var answer = 0;
    answer = 2;
    let p1 = 0;
    let p2 = str2.length - 1;
    while (p2 != str1.length - 1) {
        let str = '';
        for (let i = p1; i < p2 + 1; i++) {
            str += str1[i];
        }
        if (str === str2) {
            answer = 1;
            break;
        }
        p1++;
        p2++;
    }
    return answer;
}

// 테스트 케이스 하나가 만족하지 못함
