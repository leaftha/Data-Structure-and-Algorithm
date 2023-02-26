//유효한 팰린드롬
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let n = s.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (
      s[i] !== s[n - i - 1] &&
      97 <= s.charCodeAt(i) &&
      s.charCodeAt(n - i - 1) <= 122
    ) {
      answer = "NO";
    }
  }
  return answer;
}

// //풀이
function solution(s) {
  let answer = "YES";
  //정규식 사용
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
