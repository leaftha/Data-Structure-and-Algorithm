function solution(users, emoticons) {
  var answer = [0, 0];
  let discount = [10, 20, 30, 40];
  let arr = [];
  function dfs(emoticons, result) {
    if (emoticons.length < 1) {
      arr.push(result);
      return;
    }

    for (let i = 0; i < discount.length; i++) {
      dfs(emoticons.slice(1), [...result, [discount[i], emoticons[0]]]);
    }
  }

  dfs(emoticons, []);

  const disAmt = (dis, price) => ((100 - dis) / 100) * price;

  for (let i = 0; i < arr.length; i++) {
    const disArr = arr[i];
    const accrue = [0, 0];

    for (let j = 0; j < users.length; j++) {
      const [per, price] = users[j];
      let sum = 0;

      for (let k = 0; k < disArr.length; k++) {
        const [dis, cost] = disArr[k];

        if (dis >= per) {
          sum += disAmt(dis, cost);
        }
      }

      if (sum >= price) {
        accrue[0] += 1;
      } else {
        accrue[1] += sum;
      }
    }

    if (answer[0] < accrue[0]) {
      answer[0] = accrue[0];
      answer[1] = accrue[1];
    } else if (answer[0] === accrue[0] && answer[1] < accrue[1]) {
      answer[1] = accrue[1];
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000]
  )
);
