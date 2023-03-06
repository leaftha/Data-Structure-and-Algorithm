// 뒤집은 소수
function solution(arr) {
  let answer = [];
  let n;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    n = `${arr[i]}`;
    for (let j = n.length - 1; j >= 0; j--) {
      num += n[j];
    }
    num = parseInt(num);
    if (num % 2 === 1) {
      answer.push(num);
    }
    num = 0;
  }

  return answer;
}

// 풀이
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
