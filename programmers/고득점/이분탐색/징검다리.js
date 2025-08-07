function solution(distance, rocks, n) {
  var answer = 0;
  rocks.sort((a, b) => a - b);
  rocks.push(distance);
  let left = 1;
  let right = distance;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let removed = 0;
    let prev = 0;

    for (let i = 0; i < rocks.length; i++) {
      let rock = rocks[i] - prev;
      console.log(rock);
      if (rock < mid) {
        removed++;
      } else {
        prev = rocks[i];
      }
    }

    if (removed > n) {
      right = mid - 1;
    } else {
      answer = mid;
      left = mid + 1;
    }
  }
  return answer;
}
