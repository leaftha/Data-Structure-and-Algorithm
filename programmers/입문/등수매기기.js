// 문제 설명
// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다.
// 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때,
// 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(score) {
  var answer = [];
  let arr = [];
  let count = 1;
  let overlapCount = 0;
  for (let i = 0; i < score.length; i++) {
    let a = score[i][0];
    let b = score[i][1];
    arr.push((a + b) / 2);
  }
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    answer.push(0);
  }
  for (let i = 0; i < length; i++) {
    let max = Math.max(...arr);
    let first = arr.indexOf(max);
    let last = arr.lastIndexOf(max);
    if (first != last) {
      arr.map((item) => {
        if (item === max) return overlapCount++;
      });
      for (let j = 0; j < overlapCount; j++) {
        let pop = arr.indexOf(max);
        answer[pop] = count;
        arr[pop] = -1;
      }
      count += overlapCount;
      length = length - overlapCount + 1;
      overlapCount = 0;
    } else {
      answer[first] = count;
      arr[first] = -1;
      count++;
    }
  }
  return answer;
}
