function solution(n) {
  let answer = 0;
  let dy = Array(n).fill(0);

  dy[0] = 1;
  dy[1] = 2;

  for (let i = 2; i < dy.length; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  answer = dy[n - 1];
  return answer;
}

console.log(solution(7));
