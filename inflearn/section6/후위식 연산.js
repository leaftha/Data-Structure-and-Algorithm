// 내 풀이

function solution(s) {
    let answer;
    let stack = [];

    for (let i of s) {
        if (i === '*') {
            let b = stack.pop() * 1;
            let a = stack.pop() * 1;
            const result = a * b;
            stack.push(result);
        } else if (i === '-') {
            let b = stack.pop() * 1;
            let a = stack.pop() * 1;
            const result = a - b;
            stack.push(result);
        } else if (i === '+') {
            let b = stack.pop() * 1;
            let a = stack.pop() * 1;
            const result = a + b;
            stack.push(result);
        } else if (i === '/') {
            let b = stack.pop() * 1;
            let a = stack.pop() * 1;
            const result = a / b;
            stack.push(result);
        } else {
            stack.push(i);
        }
    }

    answer = stack[0];
    return answer;
}

// 풀이

function solution(s) {
    let answer;
    let stack = [];
    for (let x of s) {
        if (!isNaN(x)) stack.push(Number(x));
        else {
            let rt = stack.pop();
            let lt = stack.pop();
            if (x === '+') stack.push(lt + rt);
            else if (x === '-') stack.push(lt - rt);
            else if (x === '*') stack.push(lt * rt);
            else if (x === '/') stack.push(lt / rt);
        }
    }
    answer = stack[0];
    return answer;
}

let str = '352+*9-';
console.log(solution(str));
