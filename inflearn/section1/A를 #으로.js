// A를 #으로

function solution(s) {
  let answer = "";
  //of를 쓰는 법도 생각 필요
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      answer += "#";
    } else {
      answer += s[i];
    }
  }
  return answer;
}

// 풀이
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x == "A") answer += "#";
    else answer += x;
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));
