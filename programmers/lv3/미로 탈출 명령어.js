function solution(n, m, x, y, r, c, k) {
  let answer = "";

  const dist = Math.abs(x - r) + Math.abs(y - c);
  if (dist > k || ((k - dist) & 1) === 1) return "impossible";

  const dirs = [
    [1, 0, "d"],
    [0, -1, "l"],
    [0, 1, "r"],
    [-1, 0, "u"],
  ];

  let cx = x,
    cy = y;

  for (let i = 0; i < k; i++) {
    for (const [dx, dy, ch] of dirs) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (nx < 1 || nx > n || ny < 1 || ny > m) continue;

      const need = Math.abs(nx - r) + Math.abs(ny - c);
      const rem = k - (answer.length + 1);

      if (need <= rem && ((rem - need) & 1) === 0) {
        cx = nx;
        cy = ny;
        answer += ch;
        break;
      }
    }
  }

  return answer;
}
