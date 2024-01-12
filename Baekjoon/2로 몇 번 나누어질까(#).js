function solution(n, m) {
  let answer = 0;
  n -= 1;

  let na = n;

  for (let i = 1; i < 99; i++) {
    na += Math.floor(n / 2 ** i) * (2 ** i - 2 ** (i - 1));
  }

  let nb = m;

  for (let i = 1; i < 99; i++) {
    nb += Math.floor(m / 2 ** i) * (2 ** i - 2 ** (i - 1));
  }
  answer = nb - na;
  return answer;
}

console.log(solution(176, 177));
