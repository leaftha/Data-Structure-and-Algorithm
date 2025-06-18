function solution(n, t, m, timetable) {
  var answer = "";
  let start = 9 * 60;
  let newTimetable = [];
  let bustime = [];
  let time = 0;
  for (let time of timetable) {
    let [hour, min] = time.split(":");
    let times = Number(hour) * 60 + Number(min);
    newTimetable.push(times);
  }

  newTimetable.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    bustime.push(start + i * t);
  }

  let idx = 0;
  for (let i = 0; i < bustime.length; i++) {
    let cnt = 0;

    while (
      cnt < m &&
      idx < newTimetable.length &&
      newTimetable[idx] <= bustime[i]
    ) {
      idx++;
      cnt++;
    }

    if (i === n - 1) {
      if (cnt < m) {
        time = bustime[i];
      } else {
        time = newTimetable[idx - 1] - 1;
      }
    }
  }

  let hour = Math.floor(time / 60);
  let min = time % 60;
  if (hour < 10) {
    answer += `0${hour}:`;
  } else {
    answer += `${hour}:`;
  }

  if (min < 10) {
    answer += `0${min}`;
  } else {
    answer += `${min}`;
  }

  return answer;
}
