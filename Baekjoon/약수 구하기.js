function solution(n, m) {
  let answer = 0;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  answer = arr[m - 1];
  return answer;
}

console.log(solution(6, 3));
