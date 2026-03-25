function solution(message, spoiler_ranges) {
  var answer = 0;
  let word = [];

  let prev = 0;

  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      word.push([prev, i - 1, message.slice(prev, i)]);
      prev = i + 1;
    }
  }
  word.push([prev, message.length - 1, message.slice(prev)]);

  let m = new Set();
  let spoiler = [];
  for (let [s, e, w] of word) {
    let isSpoiler = false;

    for (let [ss, ee] of spoiler_ranges) {
      if (!(e < ss || s > ee)) {
        isSpoiler = true;
        spoiler.push(w);
        break;
      }
    }

    if (!isSpoiler) {
      m.add(w);
    }
  }

  for (let s of spoiler) {
    if (m.has(s)) {
      continue;
    } else {
      answer++;
      m.add(s);
    }
  }

  return answer;
}
