// 내 풀이

function solution(s) {
  let answer = "";
  let stack = [];

  for (let i of s) {
    stack.push(i);
    if (i === ")") {
      while (true) {
        const last = stack.pop();
        if (last === "(") {
          break;
        }
      }
    }
  }

  stack.map((item) => {
    answer += item;
  });

  return answer;
}

// 풀이

function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
