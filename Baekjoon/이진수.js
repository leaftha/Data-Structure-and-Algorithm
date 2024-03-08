function solution(n) {
  let answer = [];
  n = n.toString(2);
  let count = 0;
  for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] === "1") {
      answer.push(count);
    }
    count++;
  }
  return answer;
}

console.log(solution(13));
