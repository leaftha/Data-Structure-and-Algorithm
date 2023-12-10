function solution(numbers, hand) {
  var answer = "";
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  let L = [3, 0];
  let R = [3, 2];

  // [0][2]  [1][0] [1][1]
  for (let i of numbers) {
    if (i === 1 || i == 4 || i == 7 || i == "*") {
      L = findKey(i);
      answer += "L";
    } else if (i === 3 || i === 6 || i === 9 || i === "#") {
      R = findKey(i);
      answer += "R";
    } else if (i === 2 || i === 5 || i === 8 || i === 0) {
      const key = findKey(i);
      const LCount = Math.abs(key[1] - L[1]) + Math.abs(key[0] - L[0]);
      const RCount = Math.abs(key[1] - R[1]) + Math.abs(key[0] - R[0]);
      if (LCount < RCount) {
        L = key;
        answer += "L";
      } else if (LCount > RCount) {
        R = key;
        answer += "R";
      } else {
        if (hand === "right") {
          R = key;
          answer += "R";
        } else {
          L = key;
          answer += "L";
        }
      }
    }
  }

  function findKey(num) {
    for (let i = 0; i < keypad.length; i++) {
      for (let j = 0; j < keypad[i].length; j++) {
        if (num === keypad[i][j]) {
          return [i, j];
          break;
        }
      }
    }
  }
  return answer;
}
