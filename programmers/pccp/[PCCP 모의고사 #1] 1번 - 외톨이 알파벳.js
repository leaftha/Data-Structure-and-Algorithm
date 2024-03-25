function solution(input_string) {
    var answer = '';
    let answerArr = [];
    let obj = {};
    for (let i = 0; i < input_string.length; i++) {
        if (obj[input_string[i]]) {
            obj[input_string[i]].push(i);
        } else {
            obj[input_string[i]] = [i];
        }
    }

    for (let i in obj) {
        let arr = [];
        for (let j of obj[i]) {
            if (arr.length != 0) {
                let last = arr.at(-1);
                if (j - last > 1) {
                    answerArr.push(i);
                    break;
                }
            }
            arr.push(j);
        }
    }

    if (answerArr.length === 0) return 'N';

    answerArr.sort();

    answerArr.map((item) => {
        answer += item;
    });
    return answer;
}
