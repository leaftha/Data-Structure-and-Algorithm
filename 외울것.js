// 순열

let arr = [];

function permu(p, dun) {
  if (dun.length === 0) {
    return arr.push(p);
  }

  for (let i = 0; i < dun.length; i++) {
    const newArr = [...dun.slice(0, i), ...dun.slice(i + 1)];
    permu([...p, dun[i]], newArr);
  }
}

permu([], [0, 1, 2]);
console.log(arr);

// ----------------------------------------------------------------------

// 조합
// Combination;
function Combination(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));

// ----------------------------------------------------------------------

// dfs

function dfs(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(L) {
    if (L === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[L] = 1;
      DFS(L + 1);
      ch[L] = 0;
      DFS(L + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));

// ----------------------------------------------------------------------

// 결정 알고리즘

// 카운트, 몇 개의 그룹으로 나뉘는지 확인.
function count(numList, mid) {
  let count = 1;
  let sum = 0;
  for (let x of numList) {
    if (sum + x > mid) {
      count++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return count;
}
// 메인 솔루션
function decision(numList, target) {
  let answer;
  let lt = Math.max(...numList);
  let rt = numList.reduce((a, c) => a + c, 0);
  // 이진 탐색 패턴
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    // 숫자 합이 mid일 때 나오는 갯수
    if (count(numList, mid) <= target) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

// ----------------------------------------------------------------------

// 최대 공약수
function gcd(n, m) {
  let answer = 0;

  while (n % m != 0) {
    let tmp = n % m;
    n = m;
    m = tmp;
    console.log(n, m);
  }

  answer = m;

  return answer;
}

// 최소 공배수

function lcm(a, b) {
  return Math.floor((a * b) / gcd(a, b));
}

console.log(gcd(1000, 36));

// ----------------------------------------------------------------------

// 이차원 누적합

function CumulativeSum(n, arr) {
  let answer = 0;

  let prefix = Array.from(Array(arr[0].length + 1), () =>
    Array(arr[0].length + 1).fill(0)
  );

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      prefix[j + 1][i + 1] =
        prefix[j][i + 1] + prefix[j + 1][i] - prefix[j][i] + arr[j][i];
    }
  }

  console.log(prefix);

  return answer;
}

let graph = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [4, 5, 6, 7],
  [2, 2, 3, 4],
  [3, 4, 3, 4],
  [1, 1, 4, 4],
];

console.log(solution(3, graph));
