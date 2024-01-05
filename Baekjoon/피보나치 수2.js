function solution(n) {
  let answer = 0;
  let dy = Array(n + 1).fill(0);
  dy[1] = 1;
  for (let i = 2; i < dy.length; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  answer = dy[n];

  return answer;
}

console.log(solution(10));
