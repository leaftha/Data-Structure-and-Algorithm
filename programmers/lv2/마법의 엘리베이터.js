function solution(storey) {
    var answer = 0;

    let s = `${storey}`;
    let n = s.split('');
    while (n.length) {
        let num = parseInt(n.pop());
        if (num < 5) {
            answer += num;
        } else {
            if (num === 5) {
                if (n.at(-1) < 5 || n.length === 0) {
                    answer += num;
                    continue;
                }
            }
            let s = 10 - num;
            answer += s;
            if (n.length != 0) {
                let num2 = parseInt(n.pop()) + 1;
                n.push(num2);
            } else {
                n.push(1);
            }
        }
    }
    return answer;
}
