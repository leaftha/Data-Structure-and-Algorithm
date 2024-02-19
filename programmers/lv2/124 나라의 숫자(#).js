function solution(n) {
    var answer = '';
    let stack = [];
    while (n > 0) {
        if (n % 3 === 0) {
            // 나머지가 0이면 나머지를 4로 바꿔주고 몫에서 -1.
            stack.push(4);
            n = Math.floor(n / 3) - 1;
        } else {
            // 나머지가 0이 아닌 경우 3진법으로 계산.
            stack.push(n % 3);
            n = Math.floor(n / 3);
        }
    }
    stack.reverse();
    stack.map((item) => {
        answer += item;
    });
    return answer;
}
