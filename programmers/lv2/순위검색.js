function solution(info, query) {
  const map = new Map();

  function dfs(idx, key, infoArr, score) {
    if (idx === 4) {
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(score);
      return;
    }

    dfs(idx + 1, key + infoArr[idx], infoArr, score);
    dfs(idx + 1, key + "-", infoArr, score);
  }

  for (let str of info) {
    const arr = str.split(" ");
    const score = Number(arr[4]);
    dfs(0, "", arr, score);
  }

  for (let arr of map.values()) {
    arr.sort((a, b) => a - b);
  }

  function lowerBound(arr, target) {
    let left = 0,
      right = arr.length;
    while (left < right) {
      let mid = (left + right) >> 1;
      if (arr[mid] >= target) right = mid;
      else left = mid + 1;
    }
    return left;
  }

  const answer = [];

  for (let q of query) {
    let temp = q.replace(/ and /g, " ").split(" ");
    let score = Number(temp.pop());
    let key = temp.join("");

    if (!map.has(key)) {
      answer.push(0);
      continue;
    }

    let arr = map.get(key);
    let idx = lowerBound(arr, score);

    answer.push(arr.length - idx);
  }

  return answer;
}
