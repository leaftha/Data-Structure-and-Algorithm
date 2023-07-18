// 문제 설명
// 머쓱이네 옷가게는 10만 원 이상 사면 5%,
// 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을
//  return 하도록 solution 함수를 완성해보세요.

function solution(price) {
    var answer = 0;
    if (500000 <= price) {
        answer = price - price * 0.2;
    } else if (300000 <= price) {
        answer = price - price * 0.1;
    } else if (100000 <= price) {
        answer = price - price * 0.05;
    } else {
        answer = price;
    }

    answer = Math.floor(answer);
    return answer;
}
