// 문제 설명
// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
// 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가
// 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

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
