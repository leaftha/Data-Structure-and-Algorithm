function solution(n) {
  var answer = [];
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Array(i).fill(0));
  }

  let last = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      last += 1;
    }
  }

  let dxy = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];
  let i = 0;
  let c = 0;
  let xy = [0, 0];
  while (i != last) {
    i++;
    if (arr[xy[0]][xy[1]] === 0) {
      arr[xy[0]][xy[1]] = i;
    }

    if (
      xy[0] + dxy[c][0] > n - 1 ||
      xy[1] + dxy[c][1] > n - 1 ||
      arr[xy[0] + dxy[c][0]][xy[1] + dxy[c][1]] != 0
    ) {
      c++;
      if (c === 3) {
        c = 0;
      }
    }
    xy[0] += dxy[c][0];
    xy[1] += dxy[c][1];
  }

  for (let i of arr) {
    for (let j of i) {
      answer.push(j);
    }
  }

  return answer;
}
