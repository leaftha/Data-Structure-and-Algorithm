function solution(orders, course) {
  const answer = [];
  for (let i = 0; i < course.length; i++) {
    const map = {};
    let max = 0;
    orders.forEach((v) => {
      Combinations(v.split(""), course[i]).forEach((x) => {
        if (!map[x]) map[x] = 1;
        else map[x]++;
      });
      for (const k in map) {
        if (map[k] > max) max = map[k];
      }
    });
    for (const k in map) {
      if (map[k] === max && max > 1) answer.push(k);
    }
  }

  return answer.sort();
}
const Combinations = (arr, num) => {
  const results = [];

  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((select, i, origin) => {
    const remainder = origin.slice(i + 1);
    const combinations = Combinations(remainder, num - 1);
    const combine = combinations.map((v) => [select, ...v].sort().join(""));
    results.push(...combine);
  });

  return results;
};

// -------------------------------------------------------------------------
function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations(rest, n - 1);
    const combins = combis.map((v) => [fixed, ...v]);
    result.push(...combins);
  });
  return result;
}

function solution(orders, course) {
  var answer = [];

  for (const c of course) {
    const menu = [];
    for (const order of orders) {
      const orderArr = order.split("").sort();
      const comb = combinations(orderArr, c);
      menu.push(...comb);
    }
    const counter = {};
    for (const m of menu) {
      const key = m.join("");
      counter[key] = (counter[key] || 0) + 1;
    }

    const max = Math.max(...Object.values(counter));
    if (max > 1) {
      for (let [key, value] of Object.entries(counter)) {
        if (value === max) {
          answer.push(key);
        }
      }
    }
  }
  answer.sort();
  return answer;
}
