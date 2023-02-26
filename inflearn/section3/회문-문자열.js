// 회문 문자열

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let c = "";
  for (let i = s.length - 1; i >= 0; i--) {
    c += s[i];
  }
  if (s !== c) {
    answer = "NO";
  }
  return answer;
}

// //풀이

// 앞뒤의 문자를 비교하는 방식
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
}

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  if (s.split("").reverse().join("") != s) return "NO";
  return answer;
}

let str = "goooG";
console.log(solution(str));
