// 중복 문자 제거
// 다시 공부 필요
function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (i === s.indexOf(s[i])) {
      answer += s[i];
    }
  }
  return answer;
}

//풀이
function solution(s) {
  let answer = "";
  //console.log(s.indexOf("K"));
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}

console.log(solution("ksekkset"));
