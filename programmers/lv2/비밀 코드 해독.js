function solution(n, q, ans) {
  var answer = 0;

  let arr = [];
  const dfs = (idx, nums) => {
    if (nums.length === 5) {
      arr.push([...nums]);
      return;
    }

    for (let i = idx; i <= n; i++) {
      nums.push(i);
      dfs(i + 1, nums);
      nums.pop();
    }
  };

  dfs(1, []);
  for (let nums of arr) {
    let isFalse = true;
    for (let i = 0; i < q.length; i++) {
      let count = 0;
      for (let j = 0; j < nums.length; j++) {
        if (q[i].indexOf(nums[j]) !== -1) {
          count++;
        }
      }
      if (count != ans[i]) {
        isFalse = false;
        break;
      }
    }

    if (isFalse) {
      answer++;
    }
  }
  return answer;
}
