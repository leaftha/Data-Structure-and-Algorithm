// 점수 계산
function solution(arr) {
  let answer = 0,
    cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      cnt += 1;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }
  return answer;
}

//풀이
function solution(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }

  return answer;
}

// AI님의 말씀
// 두 코드 모두 정확성과 효율성 면에서
// 큰 차이가 없으므로, 개인적인 취향이나
// 코드 스타일에 따라 선택하면 됩니다.
// 그러나 일반적으로 for...of 루프는 코드의
// 가독성과 유지보수성을 높여줄 수 있으므로
// 두 번째 코드가 더 좋은 코드라고 볼 수 있습니다.

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
