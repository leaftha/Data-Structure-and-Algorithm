function solution(relation) {
  const row = relation.length;
  const col = relation[0].length;
  const candidateKeys = [];

  for (let bit = 1; bit < 1 << col; bit++) {
    let isMinimal = true;
    for (let key of candidateKeys) {
      if ((key & bit) === key) {
        isMinimal = false;
        break;
      }
    }
    if (!isMinimal) continue;

    const set = new Set();

    for (let i = 0; i < row; i++) {
      let tmp = "";

      for (let j = 0; j < col; j++) {
        if (bit & (1 << j)) {
          tmp += relation[i][j] + ",";
        }
      }

      set.add(tmp);
    }

    if (set.size === row) {
      candidateKeys.push(bit);
    }
  }

  return candidateKeys.length;
}
