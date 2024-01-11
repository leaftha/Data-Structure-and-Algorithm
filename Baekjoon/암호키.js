function solution(arr) {
    let answer = [];
    let num = 1000000;

    for (let i of arr) {
        let s = 'YES';
        for (let j = 2; j <= 1000000; j++) {
            if (i % j === 0) {
                s = 'NO';
                break;
            }
        }
        answer.push(s);
    }

    return answer;
}

let arr = [1000036000099, 1500035500153, 205000000000002];

console.log(solution(arr));
