function solution(data, col, row_begin, row_end) {
  var answer = 0;
  data.sort((a, b) => {
    if (a[col - 1] != b[col - 1]) {
      return a[col - 1] - b[col - 1];
    } else {
      return b[0] - a[0];
    }
  });

  for (let i = row_begin - 1; i < row_end; i++) {
    let sum = 0;
    for (let j = 0; j < data[i].length; j++) {
      sum += data[i][j] % (i + 1);
    }
    answer ^= sum;
  }

  return answer;
}
