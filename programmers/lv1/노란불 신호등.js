function solution(signals) {
  const n = signals.length;

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const lcm = (a, b) => (a * b) / gcd(a, b);

  let totalCycle = 1;
  for (const [G, Y, R] of signals) {
    totalCycle = lcm(totalCycle, G + Y + R);
  }

  for (let t = 1; t <= totalCycle; t++) {
    let allYellow = true;

    for (const [G, Y, R] of signals) {
      const cycle = G + Y + R;
      let mod = t % cycle;
      if (mod === 0) mod = cycle;

      if (!(mod > G && mod <= G + Y)) {
        allYellow = false;
        break;
      }
    }

    if (allYellow) return t;
  }

  return -1;
}
