function solution(arr) {
  let answer = "NO",
    flag = 0;

  let total = 0;
  arr.map((item) => {
    total += item;
  });

  function dfs(L, sum) {
    if (flag) return;
    if (L === arr.length) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      dfs(L + 1, sum + arr[L]);

      dfs(L + 1, sum);
    }
  }

  dfs(0, 0);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
