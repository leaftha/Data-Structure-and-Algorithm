function solution(numbers) {
  let answer = 0;
  let dy = Array(numbers.length).fill(0);

  dy[0] = numbers[0];
  dy[1] = numbers[0] + numbers[1];
  dy[2] = Math.max(numbers[0] + numbers[2], numbers[1] + numbers[2]);

  for (let i = 3; i < dy.length; i++) {
    dy[i] = Math.max(
      dy[i - 3] + numbers[i - 1] + numbers[i],
      dy[i - 2] + numbers[i]
    );
  }

  answer = dy.at(-1);

  return answer;
}

let arr = [10, 20, 15, 25, 10, 20];

console.log(solution(arr));
