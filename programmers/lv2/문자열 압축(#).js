function solution(s) {
  var answer = s.length;
  let length = parseInt(s.length / 2);
  for (let i = 1; i <= length; i++) {
    let str = "";
    let count = 1;
    for (let j = 0; j < s.length; j += i) {
      let cur = s.slice(j, j + i);
      while (true) {
        j += i;
        let next = s.slice(j, j + i);
        if (cur === next) {
          count++;
        } else {
          break;
        }
      }
      str += count >= 2 ? count + cur : cur;
      j -= i;
      count = 1;
    }

    answer = Math.min(answer, str.length);
  }
  return answer;
}
