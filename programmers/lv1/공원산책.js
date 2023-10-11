function solution(park, routes) {
  const [maxRow, maxCol] = [park.length - 1, park[0].length - 1];
  let row = (col = 0);

  for (let i = 0; i < park.length; i++) {
    if (park[i].search(/S/g) > -1) {
      [row, col] = [i, park[i].indexOf("S")];
      break;
    }
  }

  routes.forEach((position) => {
    const [op, n] = position.split(" ");

    let [tempRow, tempCol] = [row, col];
    let flag = true;

    for (let i = 0; i < Number(n); i++) {
      if (op === "E") tempCol++;
      else if (op === "W") tempCol--;
      else if (op === "S") tempRow++;
      else if (op === "N") tempRow--;

      if (
        tempRow > maxRow ||
        tempRow < 0 ||
        tempCol > maxCol ||
        tempCol < 0 ||
        park[tempRow][tempCol] === "X"
      ) {
        flag = false;
        break;
      }
    }
    if (flag) [row, col] = [tempRow, tempCol];
  });

  return [row, col];
}
