//재귀

//power

function power(x, n) {
  if (n <= 0) {
    return 1;
  }
  console.log(x);
  return x * power(x, n - 1);
}
power(2, 4);

//factorial

function factorial(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(7); // 24

//productOfArray
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  let total = arr[0];
  arr.splice(0, 1);
  return total * productOfArray(arr);
}

productOfArray([1, 2, 3, 10]);

//recursiveRange

function recursiveRange(n) {
  if (n === 0) {
    return 0;
  }
  return n + recursiveRange(n - 1);
}

recursiveRange(6);

//fib 피보나치 수열
// 공부 더 필요
//https://velog.io/@porupit0122/JS-%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98-%EC%88%98%EC%97%B4

function fib(n) {
  // add whatever parameters you deem necessary - good luck!
  if (n <= 1) {
    return n;
  } else if (n >= 2) {
    return fib(n - 2) + fib(n - 1);
  }
}

fib(28); // 317811
