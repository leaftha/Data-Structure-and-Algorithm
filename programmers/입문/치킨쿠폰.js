function solution(chicken) {
  var answer = 0;
  let n = chicken;
  let arr = [];
  let coupon = [];
  let sum = 0;
  while (true) {
    if (n >= 10) {
      a = Math.floor(n / 10);
      coupon.push(n % 10);
      n = a;
      arr.push(a);
    } else {
      coupon.push(n);
      break;
    }
  }
  arr.map((i) => {
    return (answer += i);
  });
  coupon.map((i) => {
    return (sum += i);
  });
  if (sum >= 10) {
    let num = Math.floor(sum / 10);
    answer += num;
    (sum % 10) + num === 10 ? (answer += 1) : (answer += 0);
  }

  return answer;
}
