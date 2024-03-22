function solution(s) {
    let answer = 0;
    let stack = [];
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[') {
            stack.push([s[i], 0]);
        } else if (s[i] === ')') {
            if (stack[stack.length - 1][0] === '[') return 0;
            let a = stack.pop();
            if (stack.length > 0) {
                if (a[1] > 0) {
                    stack[stack.length - 1][1] += 2 * a[1];
                } else {
                    stack[stack.length - 1][1] += 2;
                }
            } else {
                answer += a[1] * 2;
            }
        } else if (s[i] === ']') {
            if (stack[stack.length - 1][0] === '(') return 0;

            let a = stack.pop();
            if (stack.length >= 1) {
                if (a[1] > 0) {
                    stack[stack.length - 1][1] += 3 * a[1];
                } else {
                    stack[stack.length - 1][1] += 3;
                }
            } else {
                answer += a[1] * 3;
            }
        }
    }

    return answer;
}

console.log(solution('[][]((])'));
