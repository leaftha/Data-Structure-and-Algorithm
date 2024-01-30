function solution(files) {
  var answer = [];
  let arr = [];
  for (let i = 0; i < files.length; i++) {
    let n = "";
    let s = "";
    let isFalse = true;
    for (let j = 0; j < files[i].length; j++) {
      if (!isNaN(files[i][j]) && files[i][j] != " " && n * 1 <= 99999) {
        isFalse = false;
        n += files[i][j];
      }
      if (isFalse) {
        s += files[i][j].toLowerCase();
      }
    }
    arr.push([s, n, i]);
  }
  arr.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else {
      return parseInt(a[1]) - parseInt(b[1]);
    }
  });

  console.log(arr);

  for (let i of arr) {
    answer.push(files[i[2]]);
  }

  return answer;
}

// 위에 오답

const solution = (files) => {
  return (
    files
      .map((file) => file.match(/(\D+)(\d+)/))
      // TAIL을 제외한 HEAD, NUMBER를 추출.
      // ex) img12.png => [[img12], [img], [12], [.png], index: 0, input: img12.png] 이런식으로 mapping.
      // file[1] => (\D+) 숫자가 아닌 것들이 1개 이상 그룹, file[2] => (\d+) 숫자만 1개이상 그룹.
      .sort((a, b) => {
        // HEAD 문자열을 소문자로 변환 후 비교.
        if (a[1].toLowerCase() > b[1].toLowerCase()) {
          return 1;
        } else if (a[1].toLowerCase() < b[1].toLowerCase()) {
          return -1;
        } else {
          // HEAD문자열이 같다면 NUMBER를 정수형으로 변환 후 오름차순으로 정렬.
          // ex) '0012' 문자열 => 12 숫자로 만들어준 후 정렬.
          return parseInt(a[2]) - parseInt(b[2]);
        }
      })
      .map((file) => file.input)
  );
  // 정렬이 끝났다면 input을 mapping해줌으로 원래 문자열로 변환 후 return.
};
