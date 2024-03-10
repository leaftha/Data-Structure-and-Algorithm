function solution(n, m) {
  let answer = [];

  function check(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  let num = 0;
  let min = 100000;
  for (let i = n; i <= m; i++) {
    if (check(i)) {
      num += i;
      min = Math.min(min, i);
    }
  }

  if (num != 0) {
    answer.push(num);
    answer.push(min);
  } else {
    answer.push(-1);
  }

  return answer;
}

console.log(solution(64, 65));
