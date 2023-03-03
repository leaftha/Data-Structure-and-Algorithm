//문자열 압축

function solution(s) {
  let answer = "";
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else if (count == 1) {
      answer += s[i];
    } else {
      answer += s[i];
      answer += count;
      count = 1;
    }
  }

  return answer;
}

// 풀이
function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));

// AI 분석(너무 맹신 ㄴㄴ)
// 첫 번째 코드는 문자열 s를 순회하면서 각 문자가 이전 문자와 같은지 확인합니다.
// 만약 같다면 count 변수를 증가시키고, 다르면 answer 변수에 이전 문자와 count 값을 추가합니다.
// 이 때, count 값이 1인 경우에는 문자 자체만 추가합니다.

// 두 번째 코드는 문자열 s를 순회하면서 각 문자가 이전 문자와 같은지 확인합니다.
// 만약 같다면 cnt 변수를 증가시키고, 다르면 answer 변수에 이전 문자와 cnt 값을 추가합니다.
// 이 때, cnt 값이 1보다 큰 경우에는 String() 함수를 사용해 문자열로 변환한 후 추가합니다.
// 마지막으로 문자열 끝에 공백을 추가하여 마지막 문자가 압축될 수 있도록 처리합니다.

// 두 코드의 시간 복잡도는 모두 O(N)입니다.
// 두 번째 코드는 변수명이 직관적이고, 불필요한 조건문이 없어서 가독성이 높다는 장점이 있습니다.
