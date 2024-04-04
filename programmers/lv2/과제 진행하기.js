function timeChange(t) {
    let [s, m] = t.split(':');
    s = parseInt(s);
    m = parseInt(m);
    s *= 60;
    return s + m;
}

function solution(plans) {
    var answer = [];
    for (let i of plans) {
        i[1] = timeChange(i[1]);
        i[2] = parseInt(i[2]);
    }

    plans.sort((a, b) => {
        return a[1] - b[1];
    });
    let stack = [];

    for (let i = plans[0][1]; i <= 1439; i++) {
        if (stack.length === 0 && plans.length === 0) break;
        if (plans.length != 0 && plans[0][1] === i) {
            let a = plans.shift();
            stack.push(a);
        }
        if (stack.length === 0 && plans[0][1] > i) continue;

        stack[stack.length - 1][2] -= 1;
        if (stack.length != 0 && stack[stack.length - 1][2] <= 0) {
            answer.push(stack[stack.length - 1][0]);
            stack.pop();
        }
    }
    for (let i = stack.length - 1; i >= 0; i--) {
        answer.push(stack[i][0]);
    }
    return answer;
}
