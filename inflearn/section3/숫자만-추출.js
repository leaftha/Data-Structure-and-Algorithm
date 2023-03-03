// 숫자만 추출

function solution(str) {
  let answer = "";
  for (let n of str) {
    if (!isNaN(n)) {
      answer += n;
    }
  }
  if (answer[0] === "0") {
    answer = answer.substr(1);
  }
  return answer;
}

//풀이
function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
