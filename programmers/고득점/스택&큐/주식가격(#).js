// 문제 설명
// 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

// 제한사항
// prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
// prices의 길이는 2 이상 100,000 이하입니다.

function solution(prices) {
  const stack = [];
  const dp = Array.from(
    { length: prices.length },
    (_, i) => prices.length - i - 1
  );

  prices.forEach((price, index) => {
    while (stack.length && prices[stack[stack.length - 1]] > price) {
      const tempIndex = stack[stack.length - 1];
      dp[tempIndex] = index - tempIndex;
      stack.pop();
    }
    stack.push(index);
  });

  return dp;
}

// --------------------------------------------------------------------------------
function solution(prices) {
  var answer = new Array(prices.length).fill(0);

  const stack = [0];

  for (let i = 1; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = prices.length - 1 - j;
  }

  return answer;
}
