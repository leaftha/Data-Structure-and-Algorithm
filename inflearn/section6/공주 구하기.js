// 내 풀이

function solution(n, k) {
  let answer;
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }

  let count = 0;
  while (arr.length != 1) {
    count++;
    if (count != 3) {
      const a = arr.shift();
      arr.push(a);
    } else {
      count = 0;
      arr.shift();
    }
  }

  answer = arr[0];

  return answer;
}

// 풀이

function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));
