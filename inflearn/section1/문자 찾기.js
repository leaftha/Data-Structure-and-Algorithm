//문자 찾기
function solution(s, t) {
  let answer = 0;
  for (let i of s) {
    if (i === t) {
      answer++;
    }
  }
  return answer;
}

//풀이
function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }

  // split로 풀기
  //   let answer = s.split(t).length - 1;
  return answer;
}

let str = "COMPUTERPROGRAMMING";
