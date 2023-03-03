// 가장 짧은 문자거리

function solution(s, t) {
  let answer = [];
  let n = [];
  let max = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      n.push(i);
    }
  }

  for (let j = 0; j < s.length; j++) {
    for (let o = 0; o < n.length; o++) {
      let count = Math.abs(j - n[o]);
      if (max > count) {
        max = count;
      }
    }
    answer.push(max);
    max = Number.MAX_SAFE_INTEGER;
  }

  return answer;
}

// 풀이
function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));

// AI 분석(너무 맹신 ㄴㄴ)
// 첫 번째 코드는 먼저 문자열 s에서 문자 t가 나오는 위치를 모두 찾은 후,
// 각 위치에서부터의 거리를 구해 최솟값을 구합니다.
// 이를 문자열 s의 모든 위치에 대해 반복합니다. 시간 복잡도는 O(N^2)입니다.

// 두 번째 코드는 한 번의 반복으로 문자열 s에서 문자 t와의 거리를 구합니다.
// 문자 t와 일치하는 문자가 나오면 거리를 0으로 초기화하고, 그렇지 않으면 거리를 1씩 증가시킵니다.
// 이후 문자열 s의 끝에서부터 역순으로 탐색하며 거리를 다시 계산하고,
// 현재 위치에서의 거리와 이전 위치에서부터의 거리 중 작은 값을 선택합니다.
// 시간 복잡도는 O(N)입니다.

// 따라서 두 번째 코드가 더 효율적입니다.
// 이유는 두 번째 코드가 불필요한 반복을 피하고,
// 거리 계산을 보다 효율적으로 처리하기 때문입니다.
// 또한 코드 길이도 짧고 가독성도 높습니다.
