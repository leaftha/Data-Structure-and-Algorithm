function solution(str1, str2) {
  var answer = 0;
  // if(str2[i].charCodeAt() >= 65 && str2[i].charCodeAt() <= 90) {

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  str1 = str1.split("");
  str2 = str2.split("");

  let arr1 = [];

  for (let i = 0; i < str1.length - 1; i++) {
    let a = str1[i];
    let b = str1[i + 1];
    if (
      a.charCodeAt() >= 65 &&
      a.charCodeAt() <= 90 &&
      b.charCodeAt() >= 65 &&
      b.charCodeAt() <= 90
    ) {
      arr1.push(a + b);
    }
  }

  let arr2 = [];

  for (let i = 0; i < str2.length - 1; i++) {
    let a = str2[i];
    let b = str2[i + 1];
    if (
      a.charCodeAt() >= 65 &&
      a.charCodeAt() <= 90 &&
      b.charCodeAt() >= 65 &&
      b.charCodeAt() <= 90
    ) {
      arr2.push(a + b);
    }
  }

  if (arr1.length === 0 && arr2.length === 0) {
    return 65536;
  }

  let A = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        A++;
        arr2.splice(j, 1);
        break;
      }
    }
  }
  let B = arr1.length + arr2.length;
  answer = parseInt((A / B) * 65536);

  return answer;
}
