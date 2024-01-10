function solution(m, arr) {
  let answer = 0;
  let dy = Array(arr.length + 1).fill(0);
  dy[1] = 1;
  let obj = {};

  for (let i = 1; i <= m; i++) {
    obj[i] = [];
  }

  for (let i of arr) {
    obj[i[0]].push(i[1]);
  }

  function dfs(L) {
    for (let i of obj[L]) {
      if (dy[i] === 0) {
        dy[i] = 1;
        answer++;
        dfs(i);
      }
    }
  }

  dfs(1);

  console.log(obj);

  return answer;
}

let arr = [
  [1, 2],
  [2, 3],
  [1, 5],
  [5, 2],
  [5, 6],
  [4, 7],
];

console.log(solution(7, arr));
