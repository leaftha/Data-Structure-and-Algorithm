function solution(need, plan) {
  let answer = "YES";

  let q = need.split("");

  for (let i of plan) {
    if (i === q[0]) {
      q.shift();
    }
  }

  if (q.length > 0) {
    answer = "NO";
  }

  return answer;
}

// 풀이

function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}

let a = "CBA";
let b = "CABDGE";
console.log(solution(a, b));
