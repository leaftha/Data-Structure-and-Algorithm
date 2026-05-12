function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]);

  let time = 0;
  let idx = 0;
  let total = 0;

  const queue = [];

  while (idx < jobs.length || queue.length) {
    while (idx < jobs.length && jobs[idx][0] <= time) {
      queue.push(jobs[idx]);
      idx++;
    }

    if (queue.length) {
      queue.sort((a, b) => {
        if (a[1] === b[1]) {
          return a[0] - b[0];
        }
        return a[1] - b[1];
      });

      const [start, duration] = queue.shift();

      time += duration;

      total += time - start;
    } else {
      time = jobs[idx][0];
    }
  }

  return Math.floor(total / jobs.length);
}
