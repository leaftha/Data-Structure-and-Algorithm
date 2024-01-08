function solution(n) {
  let answer = 0;
  let dy = Array(n + 1).fill(0);

  for (let i = 2; i < dy.length; i++) {
    dy[i] = dy[i - 1] + 1;

    if (i % 2 === 0) {
      dy[i] = Math.min(dy[i], dy[i / 2] + 1);
    }

    if (i % 3 === 0) {
      dy[i] = Math.min(dy[i], dy[i / 3] + 1);
    }
    console.log(dy);
  }

  return answer;
}

console.log(solution(10));
