// 내 풀이

function solution(s) {
  let answer = "YES";
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        answer = "NO";
      }
    } else {
      stack.push(s[i]);
    }
  }

  if (stack.length != 0) {
    answer = "NO";
  }

  return answer;
}

// 풀이

function solution(s) {
  let answer = "YES";
  stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
