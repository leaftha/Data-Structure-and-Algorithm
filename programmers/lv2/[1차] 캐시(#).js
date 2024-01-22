function solution(cacheSize, cities) {
  var answer = 0;
  let arr = [];

  for (let i of cities) {
    let city = i.toLowerCase();
    if (arr.includes(city)) {
      answer += 1;
    } else {
      answer += 5;
    }

    if (cacheSize > 0) {
      if (arr.includes(city)) {
        arr.splice(arr.indexOf(city), 1);
        arr.push(city);
      } else if (arr.length === cacheSize) {
        arr.shift();
        arr.push(city);
      } else {
        arr.push(city);
      }
    }
  }
  return answer;
}
