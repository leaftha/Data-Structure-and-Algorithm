// 대문자 찾기

function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    //toUpperCase 쓰는 거 기억해 두기
    if (s[i] === s[i].toUpperCase()) {
      answer++;
    }
  }

  return answer;
}

//풀이
function solution(s) {
  let answer = 0;

  for (let x of s) {
    //아스키문자 이용 대문자는 65~90 소문자는 97~122
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) {
      answer++;
    }
  }

  return answer;
}
let str = "KoreaTimeGood";
console.log(solution(str));
