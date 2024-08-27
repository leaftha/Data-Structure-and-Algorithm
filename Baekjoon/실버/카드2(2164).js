const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  // .map(Number);
  .map((el) => el.trim().split(" ").map(Number));

let n = input[0].shift();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length += 1;
    return newNode;
  }

  firstHead() {
    return this.head.val;
  }

  size() {
    return this.length;
  }

  shift() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length -= 1;
  }
}

let q = new LinkList();

for (let i = 1; i <= n; i++) {
  q.push(i);
}
while (q.size() != 1) {
  q.shift();
  q.push(q.firstHead());
  q.shift();
}

console.log(q.firstHead());
