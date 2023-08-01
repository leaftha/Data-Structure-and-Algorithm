// 문제 설명
// 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다.
// 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다.
// 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터
// 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numlist, n) {
  var answer = [];
  let arr = [];
  for (let i = 0; i < numlist.length; i++) {
    arr.push(Math.abs(numlist[i] - n));
  }
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let min = Math.min(...arr);
    let PopMin;
    if (arr.indexOf(min) != arr.lastIndexOf(min)) {
      let first = arr.indexOf(min);
      let last = arr.lastIndexOf(min);
      max = Math.max(numlist[first], numlist[last]);
      PopMin = numlist.indexOf(max);
    } else {
      PopMin = arr.indexOf(min);
    }
    answer.push(numlist[PopMin]);
    numlist.splice(PopMin, 1);
    arr.splice(PopMin, 1);
  }
  return answer;
}
