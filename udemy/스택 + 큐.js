// 스택

// 스택은 데어터의 모음 큐과 같이 데이터의 구조이지만
// 좀더 압축적인 데이터 구조

// 스택은 후입선출 원칙을 따르는 데이터들의 모음
// ex) 가장 마지막에 추가된 요소는 가장 먼저 제거됨
// ex) 마치 책 무더기나 그릇을 쌓아올린 것 처럼

// | 4 |  <---- 가장 먼저 제거됨 & 가장 마지막에 추가됨
// | 3 |
// | 2 |
// | 1 |
// | 0 |   <--- 가장 먼저 쌓이기 시작함 & 가장 마지막에 제거
// |---|

// 활용

// 1. 함수 호출을 다루는 상황에서 사용 <= 많은 프로그래밍 언어에서 자주 활용
// 2. 포토샹 등에서 사용되는 실행 취소, 다시 실행 가장 뒤에 작업부터 차근차근 제거됨
// 3. 인터넷 브라우저의 방문 기록
// 4. 알고리즘에 활용 (트리나 그래프에서)

//************************배열로 만들기*************************

let stack1 = [];
stack1.push('0');
stack1.push('1');
stack2.push('2');

stack1.pop();

let stack2 = [];
stack2.unshift('0');
stack2.unshift('1');
stack2.unshift('2');

stack2.shift();

console.log(stack1, stack2);

// 배열도 스택으로 사용가능하다.
// push/pop 조합이나 unshift/shift 조합을 사용하면 된다.
// 간단히 같은 방향에서 추가와 제거를 사용하면 된다.

//*************************class로 만들기***********************

// 배열로 사용하면 쉽고 빠르게 코딩 가능하다.

class StackNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new StackNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return (this.size += 1);
    }

    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size -= 1;
        return temp.val;
    }
}

let stack = new Stack();

stack.push('0');
stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');

console.log(stack);
