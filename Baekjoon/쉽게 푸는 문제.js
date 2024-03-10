function solution(n, m) {
  let answer = 0;
  let num = 0;
  for (let i = 1; i <= 1000; i++) {
    for (let j = 0; j < i; j++) {
      num++;
      if (num >= n && num <= m) {
        answer += i;
      }
    }
  }

  return answer;
}

console.log(solution(3, 7));
