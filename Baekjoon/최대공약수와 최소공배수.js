function solution(n, m) {
  let answer = [];
  let gcd = 0;

  let a = n;
  let b = m;
  while (a % b != 0) {
    let tmp = a % b;
    a = b;
    b = tmp;
  }

  gcd = b;
  answer.push(gcd);
  let max = Math.floor((n * m) / gcd);

  answer.push(max);
  return answer;
}

console.log(solution(24, 18));
