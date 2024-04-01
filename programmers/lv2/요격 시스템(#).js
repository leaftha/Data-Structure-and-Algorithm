function solution(targets) {
    var answer = 0;

    targets.sort((a, b) => a[1] - b[1]);

    let temp = -1;
    for (let i of targets) {
        if (temp <= i[0]) {
            temp = i[1];
            answer++;
        }
    }

    return answer;
}
