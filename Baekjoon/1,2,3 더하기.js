function solution(n) {
  let answer = 0;
  let dy = Array(n + 1).fill(0);

  dy[1] = 1;
  dy[2] = 2;
  dy[3] = 4;

  for (let i = 4; i < dy.length; i++) {
    let sum = 0;
    for (let j = i - 1; j >= i - 3; j--) {
      sum += dy[j];
    }
    dy[i] = sum;
  }

  answer = dy[n];

  return answer;
}

console.log(solution(10));
