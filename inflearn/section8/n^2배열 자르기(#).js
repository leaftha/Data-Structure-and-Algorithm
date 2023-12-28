function solution(n, left, right) {
  var answer = [];

  let x = 0;
  let y = 0;
  let arr = [];
  for (let i = 0; i < n ** 2; i++) {
    if (left <= i && i <= right) {
      let max = Math.max(x, y);
      answer.push(max + 1);
    }
    y += 1;
    if (y === n) {
      x += 1;
      y = 0;
    }
  }

  return answer;
}

// 정답

function solution(n, left, right) {
  const answer = [];
  for (let i = left; i <= right; i++) {
    const divide = Math.floor(i / n);
    const rest = i % n;
    if (divide >= rest) {
      answer.push(divide + 1);
    } else {
      answer.push(rest + 1);
    }
  }
  return answer;
}
