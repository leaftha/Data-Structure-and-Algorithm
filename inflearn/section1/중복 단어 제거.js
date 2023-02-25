// 중복 단어 제거
function solution(s) {
  let answer = s;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length - 1; j++) {
      if (s[i] === s[j]) {
        answer.splice(j, 1);
      }
    }
  }
  return answer;
}
// big-0로 for문을 중복해서 써서O(n^2)라 안 좋음

// 풀이
function solution(s) {
  let answer;
  //console.log(s.indexOf("time"));
  //filter와 indexOf 사용
  answer = s.filter((v, i) => {
    console.log(v, s.indexOf(v), i);
    return s.indexOf(v) === i;
  });
  return answer;
}
// big-0로 for문을 중복해서 써서O(n)라 위의 내가 한 것보다 좋은 예제
// 다시 공부 필요

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
