function solution(n, bans) {
  function getIndex(s) {
    const len = s.length;
    let index = 0;

    for (let i = 1; i < len; i++) {
      index += Math.pow(26, i);
    }

    for (let i = 0; i < len; i++) {
      const v = s.charCodeAt(i) - 97;
      index += v * Math.pow(26, len - i - 1);
    }

    return index + 1;
  }

  const banIndexes = bans.map((b) => getIndex(b)).sort((a, b) => a - b);
  let target = n;
  for (const idx of banIndexes) {
    if (idx <= target) target++;
    else break;
  }

  let len = 0;
  let x = target;

  for (let i = 1; i <= 11; i++) {
    const count = Math.pow(26, i);
    if (x > count) x -= count;
    else {
      len = i;
      break;
    }
  }

  let result = "";
  for (let i = 0; i < len; i++) {
    const idx = (x - 1) % 26;
    result = String.fromCharCode(97 + idx) + result;
    x = Math.floor((x - 1) / 26) + 1;
  }

  return result;
}
