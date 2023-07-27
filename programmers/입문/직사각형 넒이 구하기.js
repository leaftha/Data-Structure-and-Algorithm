function solution(dots) {
    var answer = 0;
    let x = [];
    let y = [];
    for (let i = 0; i < dots.length; i++) {
        x.push(dots[i][0]);
        y.push(dots[i][1]);
    }
    let width = Math.max(...x) - Math.min(...x);
    let height = Math.max(...y) - Math.min(...y);
    console.log(Math.max(...x));
    answer = width * height;
    return answer;
}
