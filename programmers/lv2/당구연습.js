function solution(m, n, startX, startY, balls) {
  const answer = [];

  for (let [endX, endY] of balls) {
    const candidates = [];

    if (!(startY === endY && startX > endX)) {
      candidates.push((startX + endX) ** 2 + (startY - endY) ** 2);
    }

    if (!(startY === endY && startX < endX)) {
      candidates.push((startX - (2 * m - endX)) ** 2 + (startY - endY) ** 2);
    }

    if (!(startX === endX && startY > endY)) {
      candidates.push((startX - endX) ** 2 + (startY + endY) ** 2);
    }

    if (!(startX === endX && startY < endY)) {
      candidates.push((startX - endX) ** 2 + (startY - (2 * n - endY)) ** 2);
    }

    answer.push(Math.min(...candidates));
  }

  return answer;
}
