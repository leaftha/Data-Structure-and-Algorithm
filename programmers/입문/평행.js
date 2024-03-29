// 문제 설명
// 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.

// [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면
// 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
  var answer = 0;
  const slope = (dots1J, dots1I, dots2J, dots2I) => {
    const one = (dots1J[1] - dots1I[1]) / (dots1J[0] - dots1I[0]);
    const two = (dots2J[1] - dots2I[1]) / (dots2J[0] - dots2I[0]);
    if (one === two) {
      return (answer = 1);
    }
    return;
  };
  slope(dots[0], dots[1], dots[2], dots[3]);

  slope(dots[0], dots[2], dots[1], dots[3]);

  slope(dots[0], dots[3], dots[1], dots[2]);
  return answer;
}
