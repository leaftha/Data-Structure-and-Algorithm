function solution(m, songs) {
  let answer;

  songs.sort((a, b) => {
    return a - b;
  });

  let lt = Math.max(...songs);
  let rt = 0;
  arr.map((item) => {
    rt += item;
  });

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

function count(songs, capactiy) {
  let cnt = 1;
  let sum = 0;

  for (let i of songs) {
    if (sum + i > capactiy) {
      cnt++;
      sum = i;
    } else {
      sum += i;
    }
  }
  return cnt;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
