function solution(sequence) {
  var answer = 0;

  let a = [];
  let b = [];

  for (let i = 0; i < sequence.length; i++) {
    if (i % 2 === 0) {
      a.push(sequence[i] * 1);
      b.push(sequence[i] * -1);
    } else {
      a.push(sequence[i] * -1);
      b.push(sequence[i] * 1);
    }
  }

  let maxA = a[0];
  let currA = a[0];
  let maxB = b[0];
  let currB = b[0];

  for (let i = 1; i < sequence.length; i++) {
    currA = Math.max(a[i], currA + a[i]);
    maxA = Math.max(maxA, currA);

    currB = Math.max(b[i], currB + b[i]);
    maxB = Math.max(maxB, currB);
  }

  return Math.max(maxA, maxB);
}
