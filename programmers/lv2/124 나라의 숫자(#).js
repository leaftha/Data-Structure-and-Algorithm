function solution(n) {
    var answer = '';
    let stack = [];
    while (n > 0) {
        if (n % 3 === 0) {
            stack.push(4);
            n = Math.floor(n / 3) - 1;
        } else {
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
