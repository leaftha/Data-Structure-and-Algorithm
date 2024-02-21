function check(s) {
    let stack = [];

    for (let i of s) {
        if (i === '(') {
            stack.push(i);
        } else {
            if (stack.at(-1) === '(') {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}

function solution(p) {
    var answer = '';

    if (check(p)) {
        return p;
    }

    p = p.split('');

    function recur(s) {
        if (s.length === 0) {
            return '';
        }
        let obj = {
            '(': 0,
            ')': 0,
        };
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                obj['('] += 1;
            } else {
                obj[')'] += 1;
            }
            if (obj[')'] === obj['(']) {
                let u = s.slice(0, i + 1);
                let v = s.slice(i + 1);

                if (check(u)) {
                    let newV = recur(v);
                    return `${u}${newV}`;
                } else {
                    let newV = recur(v);
                    u.shift();
                    u.pop();
                    let newU = [];
                    for (let x of u) {
                        if (x === '(') {
                            newU.push(')');
                        } else {
                            newU.push('(');
                        }
                    }
                    return `(${newV})${newU}`;
                }
            }
        }
    }

    let newP = recur(p);

    for (let i of newP) {
        if (i != ',') {
            answer += i;
        }
    }
    return answer;
}
