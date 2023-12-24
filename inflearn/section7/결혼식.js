// function solution(meeting){
// 	let answer=Number.MIN_SAFE_INTEGER;

// 	meeting.sort((a,b) => {
// 		return a[0] -  b[0]
// 	})

// 	let sum = 0
// 	let arr = []

// 	for (let i of meeting) {
// 		if (arr.length != 0) {
// 			if (arr[arr.length-1] > i[0]) {
// 				arr.push(i[1])
// 			}
// 			if(arr[0] <= i[0]) {
// 				arr.shift()
// 			}
// 		}else {
// 			arr.push(i[1])
// 		}

// 		answer = Math.max(answer, arr.length)
// 		console.log(arr)
// 	}

// 	console.log(meeting)

// 	return answer;
// }

// 풀이

function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];
  for (let x of times) {
    T_line.push([x[0], "s"]);
    T_line.push([x[1], "e"]);
  }
  T_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
