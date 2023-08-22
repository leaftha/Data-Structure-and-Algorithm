function solution(s, n) {
    var answer = '';
    for (let i = 0; i < s.length; i++) {
        let a = s.charCodeAt([i]);
        let b = a + n;
        if (a === 32) {
            answer += ' ';
        } else {
            if (a <= 90) {
                if (b > 90) {
                    answer += String.fromCharCode(b - 26);
                } else {
                    answer += String.fromCharCode(b);
                }
            } else if (a <= 122) {
                if (b > 122) {
                    answer += String.fromCharCode(b - 26);
                } else {
                    answer += String.fromCharCode(b);
                }
            }
        }
    }
    return answer;
}
