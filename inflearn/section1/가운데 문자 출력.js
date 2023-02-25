//가운데 문자 출력
function solution(s) {
  let answer;
  let middle = Math.floor(s.length / 2);
  console.log(middle);
  if (s.length % 2 === 1) {
    answer = s[middle];
  } else {
    answer = s[middle - 1];
    answer += s[middle];
  }
  return answer;
}

//풀이
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  //문자열 추출 메소드 존재
  //str.substr(시작 인덱스, 추출 갯수)
  //str.substring(시작 인덱스번호, 끝 인덱스번호)
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  //if(s.length%2===1) answer=s.substr(mid, 1);
  //else answer=s.substr(mid-1, 2);
  return answer;
}

console.log(solution("gasdcgsd"));
